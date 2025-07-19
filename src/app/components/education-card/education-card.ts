import {Component, Input} from '@angular/core';
import {EducationData} from '../../models/education.model';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-education-card',
  imports: [
    NgClass
  ],
  templateUrl: './education-card.html',
  styleUrl: './education-card.scss'
})
export class EducationCard {
  @Input() data!: EducationData;

  isCollapsed = false;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
