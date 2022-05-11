import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConferencesPageRoutingModule } from './conferences-routing.module';

import { ConferencesPage } from './conferences.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConferencesPageRoutingModule
  ],
  declarations: [ConferencesPage]
})
export class ConferencesPageModule {}
