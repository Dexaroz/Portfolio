import {Component, Input} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-skill-card',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './skill-card.html',
  styleUrl: './skill-card.scss'
})
export class SkillCard {
  @Input() skillsTitle: string = '';

  techIcons: { [tech: string]: string } = {
    Angular: 'fab fa-angular',
    Python: 'fab fa-python',
    JavaScript: 'fab fa-js',
    TypeScript: 'fab fa-js',
    SCSS: 'fab fa-sass',
    HTML: 'fab fa-html5',
    CSS: 'fab fa-css3-alt',
    NodeJS: 'fab fa-node',
    GitHub: 'fab fa-github',
    Java: 'fab fa-java',
  };

  getSkillIcon: { [tech: string]: string } = {
    'R': '/icons/r.svg',
    'C': '/icons/c.svg',
    'C++': '/icons/cpp.svg',
    'TypeScript': '/icons/typescript.svg',
    'Firebase': '/icons/firebase.svg',
    'Git' : '/icons/git.svg',
    'Tailwind CSS': '/icons/tailwindcss.svg',
    'Django': '/icons/django.svg',
    'JetBrains': '/icons/jetbrains.svg',
    'SQLite': '/icons/sqlite.svg',
    'MySQL': '/icons/mysql.svg',
  }
}
