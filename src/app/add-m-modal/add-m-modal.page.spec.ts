import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddMModalPage } from './add-m-modal.page';

describe('AddMModalPage', () => {
  let component: AddMModalPage;
  let fixture: ComponentFixture<AddMModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddMModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
