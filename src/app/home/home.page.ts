import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CityMenuPage } from '../city-menu/city-menu.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private navCtrl: NavController) {}
 
  Visit(){
    this.navCtrl.navigateForward('/city-menu');
  }

}
