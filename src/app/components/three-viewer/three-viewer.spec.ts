import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeViewer } from './three-viewer';

describe('ThreeViewer', () => {
  let component: ThreeViewer;
  let fixture: ComponentFixture<ThreeViewer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreeViewer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeViewer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
