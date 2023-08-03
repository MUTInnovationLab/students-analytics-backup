import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadSpreadsheetPage } from './upload-spreadsheet.page';

describe('UploadSpreadsheetPage', () => {
  let component: UploadSpreadsheetPage;
  let fixture: ComponentFixture<UploadSpreadsheetPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UploadSpreadsheetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
