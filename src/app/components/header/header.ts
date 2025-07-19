import { Component } from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    NgClass
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  isVisible = true;
  activeSection: string | null = 'home';

  private observer!: IntersectionObserver;
  private lastScrollTop = 0;
  private scrollContainer: HTMLElement | null = null;

  sections = ['home', 'projects', 'skills', 'education', 'contact'];

  ngOnInit() {
    this.scrollContainer = document.querySelector('.scroll-container');

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.activeSection = entry.target.id;
            break;
          }
        }
      },
      {
        root: null,
        threshold: 0.5
      }
    );

    this.sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) this.observer.observe(el);
    });

    this.scrollContainer?.addEventListener('scroll', this.handleScroll, false);
  }

  handleScroll = (): void => {
    if (!this.scrollContainer) return;

    const currentScroll = this.scrollContainer.scrollTop;

    if (currentScroll > this.lastScrollTop && currentScroll > 100) {
      this.isVisible = false;
    } else {
      this.isVisible = true;
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  };

  scrollTo(sectionId: string): void {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.scrollContainer?.removeEventListener('scroll', this.handleScroll, false);
  }
}
