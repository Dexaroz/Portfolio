import {Component, Input} from '@angular/core';
import {Project} from '../../models/project.model';
import {ProjectsCard} from '../projects-card/projects-card';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-projects-grid',
  imports: [
    ProjectsCard,
    NgForOf
  ],
  templateUrl: './projects-grid.html',
  styleUrl: './projects-grid.scss'
})
export class ProjectsGrid {
  @Input() projects: Project[] = [];
}
