import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewMarksPage } from './view-marks.page';

const routes: Routes = [
  {
    path: '',
    component: ViewMarksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewMarksPageRoutingModule {}
