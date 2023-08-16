import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddDepartmentOrCoursePage } from './add-department-or-course.page';

describe('AddDepartmentOrCoursePage', () => {
  let component: AddDepartmentOrCoursePage;
  let fixture: ComponentFixture<AddDepartmentOrCoursePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddDepartmentOrCoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
