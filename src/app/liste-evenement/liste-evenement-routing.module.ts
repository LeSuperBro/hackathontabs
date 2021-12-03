import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeEvenementPage } from './liste-evenement.page';

const routes: Routes = [
  {
    path: '',
    component: ListeEvenementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeEvenementPageRoutingModule {}
