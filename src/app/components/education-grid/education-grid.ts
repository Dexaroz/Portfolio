import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";
import {ProjectsCard} from "../projects-card/projects-card";
import {Project} from '../../models/project.model';
import {EducationData} from '../../models/education.model';
import {EducationCard} from '../education-card/education-card';

@Component({
  selector: 'app-education-grid',
  imports: [
    NgForOf,
    EducationCard,
  ],
  templateUrl: './education-grid.html',
  styleUrl: './education-grid.scss'
})
export class EducationGrid {
  @Input() education: EducationData[] = [];
}
