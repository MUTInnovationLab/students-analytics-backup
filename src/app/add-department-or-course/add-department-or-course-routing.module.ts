import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDepartmentOrCoursePage } from './add-department-or-course.page';

const routes: Routes = [
  {
    path: '',
    component: AddDepartmentOrCoursePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddDepartmentOrCoursePageRoutingModule {}
