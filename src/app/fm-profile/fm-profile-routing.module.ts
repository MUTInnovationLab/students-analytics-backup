import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FMProfilePage } from './fm-profile.page';

const routes: Routes = [
  {
    path: '',
    component: FMProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FMProfilePageRoutingModule {}
