import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationGrid } from './education-grid';

describe('EducationGrid', () => {
  let component: EducationGrid;
  let fixture: ComponentFixture<EducationGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
