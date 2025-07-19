import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EducationData} from '../../models/education.model';
import {EducationCard} from '../../components/education-card/education-card';
import {NgForOf} from '@angular/common';
import {EducationGrid} from '../../components/education-grid/education-grid';

@Component({
  selector: 'app-education',
  imports: [
    EducationCard,
    NgForOf,
    EducationGrid
  ],
  templateUrl: './education.html',
  styleUrl: './education.scss'
})
export class Education {
  education: EducationData[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<EducationData[]>('data/education.json')
      .subscribe((data) => (this.education = data));
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
