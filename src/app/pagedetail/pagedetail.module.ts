import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagedetailPageRoutingModule } from './pagedetail-routing.module';

import { PagedetailPage } from './pagedetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagedetailPageRoutingModule
  ],
  declarations: [PagedetailPage]
})
export class PagedetailPageModule {}
