import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AteliersInitiationPage } from './ateliers-initiation.page';

const routes: Routes = [
  {
    path: '',
    component: AteliersInitiationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AteliersInitiationPageRoutingModule {}
