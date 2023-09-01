import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpecificModulesPage } from './specific-modules.page';

describe('SpecificModulesPage', () => {
  let component: SpecificModulesPage;
  let fixture: ComponentFixture<SpecificModulesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SpecificModulesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
