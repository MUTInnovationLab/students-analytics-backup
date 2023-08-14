import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddLecturePage } from './add-lecture.page';

const routes: Routes = [
  {
    path: '',
    component: AddLecturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddLecturePageRoutingModule {}
