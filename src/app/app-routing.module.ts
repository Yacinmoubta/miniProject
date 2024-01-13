import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'city-menu',
    loadChildren: () => import('./city-menu/city-menu.module').then( m => m.CityMenuPageModule)
  },
  {
    path: 'rabat',
    loadChildren: () => import('./rabat/rabat.module').then( m => m.RabatPageModule)
  },
  {
    path: 'casablanca',
    loadChildren: () => import('./casablanca/casablanca.module').then( m => m.CasablancaPageModule)
  },
  {
    path: 'fes',
    loadChildren: () => import('./fes/fes.module').then( m => m.FesPageModule)
  },
  {
    path: 'tanger',
    loadChildren: () => import('./tanger/tanger.module').then( m => m.TangerPageModule)
  },
  {
    path: 'oujda',
    loadChildren: () => import('./oujda/oujda.module').then( m => m.OujdaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
