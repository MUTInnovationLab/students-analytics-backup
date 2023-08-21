import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewMarksPage } from './view-marks.page';

describe('ViewMarksPage', () => {
  let component: ViewMarksPage;
  let fixture: ComponentFixture<ViewMarksPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ViewMarksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
