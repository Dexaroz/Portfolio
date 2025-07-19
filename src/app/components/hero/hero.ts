import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChildren,
  QueryList,
} from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero implements AfterViewInit {
  fullText: string = 'Developer';
  displayedJob: string = '';
  isDeleting: boolean = false;
  typingSpeed: number = 120;
  pauseTime: number = 5000;

  @ViewChildren('heroContainer')
  animatedElements!: QueryList<ElementRef>;

  ngOnInit(): void {
    this.typeLoop();
  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
    });

    this.animatedElements.forEach(el => {
      observer.observe(el.nativeElement);
    });
  }

  typeLoop(): void {
    if (this.isDeleting) {
      this.displayedJob = this.fullText.substring(0, this.displayedJob.length - 1);
    } else {
      this.displayedJob = this.fullText.substring(0, this.displayedJob.length + 1);
    }

    let delay = this.typingSpeed;

    if (!this.isDeleting && this.displayedJob === this.fullText) {
      delay = this.pauseTime;
      this.isDeleting = true;
    } else if (this.isDeleting && this.displayedJob === '') {
      this.isDeleting = false;
      delay = this.typingSpeed;
    }

    setTimeout(() => this.typeLoop(), delay);
  }
}
