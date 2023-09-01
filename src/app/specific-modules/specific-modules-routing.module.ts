import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecificModulesPage } from './specific-modules.page';

const routes: Routes = [
  {
    path: '',
    component: SpecificModulesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecificModulesPageRoutingModule {}
