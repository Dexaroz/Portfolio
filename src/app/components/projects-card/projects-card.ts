import {Component, Input} from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-projects-card',
  imports: [
    NgForOf
  ],
  templateUrl: './projects-card.html',
  styleUrl: './projects-card.scss'
})
export class ProjectsCard {
  @Input() projectImage: string = '';
  @Input() projectTitle: string = '';
  @Input() projectDescription: string = '';
  @Input() projectTechnologies: string[] = [];
  @Input() projectCodeUrl: string = '';
  @Input() projectLiveUrl: string = '';

  techIcons: { [tech: string]: string } = {
    Angular: 'fab fa-angular',
    Python: 'fab fa-python',
    JavaScript: 'fab fa-js',
    TypeScript: 'fab fa-js',
    SCSS: 'fab fa-sass',
    HTML: 'fab fa-html5',
    CSS: 'fab fa-css3-alt',
    React: 'fab fa-react',
    NodeJS: 'fab fa-node',
    GitHub: 'fab fa-github',
    Java: 'fab fa-java',
    Threejs: 'fa-solid fa-cube',
    Firebase: 'fa-solid fa-fire'
  };
}
