import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProjectsGrid} from '../../components/projects-grid/projects-grid';
import {SkillGrid} from '../../components/skill-grid/skill-grid';

@Component({
  selector: 'app-skills',
  imports: [
    SkillGrid
  ],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  skills: string[] = ['HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'C', 'C++', 'R',
    'TypeScript', 'Angular', 'Git', 'GitHub', 'Firebase', 'Tailwind CSS',
    'Tailwind CSS', 'Django', 'JetBrains', 'SQLite', 'MySQL'];

  constructor(private http: HttpClient) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
  }
}
