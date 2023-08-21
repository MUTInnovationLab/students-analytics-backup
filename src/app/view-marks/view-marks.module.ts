import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewMarksPageRoutingModule } from './view-marks-routing.module';

import { ViewMarksPage } from './view-marks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewMarksPageRoutingModule
  ],
  declarations: [ViewMarksPage]
})
export class ViewMarksPageModule {}
