import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddMModalPageRoutingModule } from './add-m-modal-routing.module';

import { AddMModalPage } from './add-m-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddMModalPageRoutingModule
  ],
  declarations: [AddMModalPage]
})
export class AddMModalPageModule {}
