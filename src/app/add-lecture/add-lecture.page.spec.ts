import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddLecturePage } from './add-lecture.page';

describe('AddLecturePage', () => {
  let component: AddLecturePage;
  let fixture: ComponentFixture<AddLecturePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddLecturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
