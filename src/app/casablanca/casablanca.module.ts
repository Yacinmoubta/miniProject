import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasablancaPageRoutingModule } from './casablanca-routing.module';

import { CasablancaPage } from './casablanca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasablancaPageRoutingModule
  ],
  declarations: [CasablancaPage]
})
export class CasablancaPageModule {}
