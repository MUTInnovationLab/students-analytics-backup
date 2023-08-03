import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadSpreadsheetPage } from './upload-spreadsheet.page';

const routes: Routes = [
  {
    path: '',
    component: UploadSpreadsheetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploadSpreadsheetPageRoutingModule {}
