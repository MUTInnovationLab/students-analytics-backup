import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddLecturePageRoutingModule } from './add-lecture-routing.module';

import { AddLecturePage } from './add-lecture.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddLecturePageRoutingModule
  ],
  declarations: [AddLecturePage]
})
export class AddLecturePageModule {}
