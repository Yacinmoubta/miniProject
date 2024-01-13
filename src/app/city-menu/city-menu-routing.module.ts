import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RabatPage } from '../rabat/rabat.page';
import { CityMenuPage } from './city-menu.page';

const routes: Routes = [
  {
    path: '',
    component: CityMenuPage
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CityMenuPageRoutingModule {}
