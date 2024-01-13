import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CityMenuPageRoutingModule } from './city-menu-routing.module';

import { CityMenuPage } from './city-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CityMenuPageRoutingModule,
    
  ],
  declarations: [CityMenuPage]
})
export class CityMenuPageModule {}
