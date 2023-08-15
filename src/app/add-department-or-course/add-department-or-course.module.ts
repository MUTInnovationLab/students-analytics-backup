import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddDepartmentOrCoursePageRoutingModule } from './add-department-or-course-routing.module';

import { AddDepartmentOrCoursePage } from './add-department-or-course.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddDepartmentOrCoursePageRoutingModule
  ],
  declarations: [AddDepartmentOrCoursePage]
})
export class AddDepartmentOrCoursePageModule {}
