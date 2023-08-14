import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMModalPage } from './add-m-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AddMModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddMModalPageRoutingModule {}
