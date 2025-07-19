import {
  Component,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  ViewChild, ViewChildren, QueryList,
} from '@angular/core';
import * as THREE from 'three';
import { GLTFLoader, OrbitControls } from 'three-stdlib';

@Component({
  selector: 'app-three-viewer',
  templateUrl: './three-viewer.html',
  styleUrls: ['./three-viewer.scss'],
})
export class ThreeViewerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas') canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChildren('hintIcon, hintText') hintElements!: QueryList<ElementRef>;

  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private controls!: OrbitControls;
  private frameId: number = 0;
  private model: THREE.Object3D | null = null;
  private clock = new THREE.Clock();

  ngAfterViewInit(): void {
    this.initScene();
    this.animate();

    const canvasEl = this.canvasRef.nativeElement;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          canvasEl.classList.add('visible');
          observer.unobserve(canvasEl);
        }
      });
    }, { threshold: 0.2 });

    const observerHint = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observerHint.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    this.hintElements.forEach((el) => {
      observerHint.observe(el.nativeElement);
    });

    observer.observe(canvasEl);
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.frameId);
    this.renderer.dispose();
  }

  private initScene(): void {
    const canvas = this.canvasRef.nativeElement;

    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    this.renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    this.scene = new THREE.Scene();
    this.scene.background = null;

    this.camera = new THREE.PerspectiveCamera(
      50,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    );
    this.camera.position.set(250, 300, 250);
    this.camera.lookAt(0, 1.5, 0);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.enableZoom = false;
    this.controls.enablePan = false;
    this.controls.dampingFactor = 0.01;

    const light = new THREE.HemisphereLight(0xffffff, 0x444444, 5);
    this.scene.add(light);

    const loader = new GLTFLoader();
    loader.load(
      'model.glb',
      (gltf) => {
        this.model = gltf.scene;

        const box = new THREE.Box3().setFromObject(this.model);
        const center = new THREE.Vector3();
        box.getCenter(center);
        this.model.position.sub(center);

        this.model.position.y = 0.7;

        this.scene.add(this.model);
      },
      undefined,
      (error) => {
        console.error('Error al cargar el modelo:', error);
      }
    );
  }

  private animate = (): void => {
    this.frameId = requestAnimationFrame(this.animate);
    const elapsed = this.clock.getElapsedTime();

    if (this.model) {
      this.model.position.y += Math.sin(elapsed * 4) * 0.15;
    }

    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  };
}
