import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyModalPage } from './my-modal.page';

describe('MyModalPage', () => {
  let component: MyModalPage;
  let fixture: ComponentFixture<MyModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
