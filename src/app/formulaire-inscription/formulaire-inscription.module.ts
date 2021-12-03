import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { IonicModule } from '@ionic/angular';

import { FormulaireInscriptionPageRoutingModule } from './formulaire-inscription-routing.module';

import { FormulaireInscriptionPage } from './formulaire-inscription.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormulaireInscriptionPageRoutingModule
  ],
  declarations: [FormulaireInscriptionPage]
})
export class FormulaireInscriptionPageModule {}
