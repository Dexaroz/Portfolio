import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationCard } from './education-card';

describe('EducationCard', () => {
  let component: EducationCard;
  let fixture: ComponentFixture<EducationCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
