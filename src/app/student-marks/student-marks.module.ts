import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StudentMarksPageRoutingModule } from './student-marks-routing.module';

import { StudentMarksPage } from './student-marks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudentMarksPageRoutingModule
  ],
  declarations: [StudentMarksPage]
})
export class StudentMarksPageModule {}
