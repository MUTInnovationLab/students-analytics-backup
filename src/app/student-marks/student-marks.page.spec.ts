import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentMarksPage } from './student-marks.page';

describe('StudentMarksPage', () => {
  let component: StudentMarksPage;
  let fixture: ComponentFixture<StudentMarksPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StudentMarksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
