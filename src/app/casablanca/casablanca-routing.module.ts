import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasablancaPage } from './casablanca.page';

const routes: Routes = [
  {
    path: '',
    component: CasablancaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasablancaPageRoutingModule {}
