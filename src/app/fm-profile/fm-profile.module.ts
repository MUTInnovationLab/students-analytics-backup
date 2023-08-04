import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FMProfilePageRoutingModule } from './fm-profile-routing.module';

import { FMProfilePage } from './fm-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FMProfilePageRoutingModule
  ],
  declarations: [FMProfilePage]
})
export class FMProfilePageModule {}
