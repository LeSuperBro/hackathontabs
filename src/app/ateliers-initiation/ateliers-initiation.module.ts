import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AteliersInitiationPageRoutingModule } from './ateliers-initiation-routing.module';

import { AteliersInitiationPage } from './ateliers-initiation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AteliersInitiationPageRoutingModule
  ],
  declarations: [AteliersInitiationPage]
})
export class AteliersInitiationPageModule {}
