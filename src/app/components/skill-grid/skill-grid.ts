import {Component, Input} from '@angular/core';
import {NgForOf} from "@angular/common";
import {ProjectsCard} from "../projects-card/projects-card";
import {SkillCard} from '../skill-card/skill-card';
import {Project} from '../../models/project.model';
import {Skills} from '../../pages/skills/skills';

@Component({
  selector: 'app-skill-grid',
  imports: [
    NgForOf,
    SkillCard
  ],
  templateUrl: './skill-grid.html',
  styleUrl: './skill-grid.scss'
})
export class SkillGrid {
  @Input() skills: string[] = [];
}
