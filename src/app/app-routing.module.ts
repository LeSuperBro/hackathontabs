import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'pagedetail',
    loadChildren: () => import('./pagedetail/pagedetail.module').then( m => m.PagedetailPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'liste-evenement',
    loadChildren: () => import('./liste-evenement/liste-evenement.module').then( m => m.ListeEvenementPageModule)
  },
  {
    path: 'formulaire-inscription',
    loadChildren: () => import('./formulaire-inscription/formulaire-inscription.module').then( m => m.FormulaireInscriptionPageModule)
  },
  {
    path: 'ateliers-initiation',
    loadChildren: () => import('./ateliers-initiation/ateliers-initiation.module').then( m => m.AteliersInitiationPageModule)
  },
  {
    path: 'conferences',
    loadChildren: () => import('./conferences/conferences.module').then( m => m.ConferencesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
