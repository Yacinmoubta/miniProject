import { Component } from '@angular/core';
import { RabatPage } from '../rabat/rabat.page';
import { NavController } from '@ionic/angular';
import { CasablancaPage } from '../casablanca/casablanca.page';
import { FesPage } from '../fes/fes.page';
import { TangerPage } from '../tanger/tanger.page';
@Component({
  selector: 'app-city-menu',
  templateUrl: './city-menu.page.html',
  styleUrls: ['./city-menu.page.scss'],
})
export class CityMenuPage  {

  constructor(private navCtrl:NavController) { }
  visitRabat(){
    this.navCtrl.navigateForward('/rabat');

  }
  visitCasa(){
    this.navCtrl.navigateForward('/casablanca');
  }
  visitFes(){
    this.navCtrl.navigateForward('/fes');
  }
  visitTanger(){
    this.navCtrl.navigateForward('tanger');
  }
  visitOujda(){
    this.navCtrl.navigateForward('/oujda');
  }
 

}
