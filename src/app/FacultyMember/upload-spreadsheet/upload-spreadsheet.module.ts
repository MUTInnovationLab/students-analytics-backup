import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UploadSpreadsheetPageRoutingModule } from './upload-spreadsheet-routing.module';

import { UploadSpreadsheetPage } from './upload-spreadsheet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UploadSpreadsheetPageRoutingModule
  ],
  declarations: [UploadSpreadsheetPage]
})
export class UploadSpreadsheetPageModule {}
