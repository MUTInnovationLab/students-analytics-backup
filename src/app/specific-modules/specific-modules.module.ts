import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpecificModulesPageRoutingModule } from './specific-modules-routing.module';

import { SpecificModulesPage } from './specific-modules.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpecificModulesPageRoutingModule
  ],
  declarations: [SpecificModulesPage]
})
export class SpecificModulesPageModule {}
