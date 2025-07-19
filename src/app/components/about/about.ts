import {AfterViewInit, Component, ElementRef, QueryList, ViewChildren} from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About implements AfterViewInit {

  @ViewChildren('aboutContainer')
  animatedElements!: QueryList<ElementRef>;

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
}
