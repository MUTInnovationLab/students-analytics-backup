import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FMProfilePage } from './fm-profile.page';

describe('FMProfilePage', () => {
  let component: FMProfilePage;
  let fixture: ComponentFixture<FMProfilePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FMProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
