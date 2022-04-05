import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeolocHackPage } from './geoloc-hack.page';

const routes: Routes = [
  {
    path: '',
    component: GeolocHackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeolocHackPageRoutingModule {}
