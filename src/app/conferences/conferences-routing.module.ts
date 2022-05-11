import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConferencesPage } from './conferences.page';

const routes: Routes = [
  {
    path: '',
    component: ConferencesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConferencesPageRoutingModule {}
