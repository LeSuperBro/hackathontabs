import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormulaireInscriptionPage } from './formulaire-inscription.page';

const routes: Routes = [
  {
    path: '',
    component: FormulaireInscriptionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormulaireInscriptionPageRoutingModule {}
