import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillGrid } from './skill-grid';

describe('SkillGrid', () => {
  let component: SkillGrid;
  let fixture: ComponentFixture<SkillGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillGrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillGrid);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
