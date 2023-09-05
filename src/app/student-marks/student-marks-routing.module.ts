import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentMarksPage } from './student-marks.page';

const routes: Routes = [
  {
    path: '',
    component: StudentMarksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentMarksPageRoutingModule {}
