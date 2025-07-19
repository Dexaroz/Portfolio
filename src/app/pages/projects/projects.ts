import { Component } from '@angular/core';
import {Project} from '../../models/project.model';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {ProjectsGrid} from '../../components/projects-grid/projects-grid';

@Component({
  selector: 'app-projects',
  imports: [
    ProjectsGrid,
    HttpClientModule
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  projects: Project[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Project[]>('data/projects.json')
      .subscribe((data) => (this.projects = data));
  }

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
