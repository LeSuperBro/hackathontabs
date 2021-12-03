import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagedetailPage } from './pagedetail.page';

const routes: Routes = [
  {
    path: '',
    component: PagedetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagedetailPageRoutingModule {}
