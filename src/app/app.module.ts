import { ElementRef, NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { CityMenuPage } from './city-menu/city-menu.page';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { RabatPage } from './rabat/rabat.page';
import { CasablancaPage } from './casablanca/casablanca.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';



const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'city-menu', component: CityMenuPage },
];
const routes1: Routes = [
  { path: '', component: CityMenuPage },
  { path: 'rabat', component: RabatPage },
];
const routes2: Routes = [
  { path: '', component: CityMenuPage },
  { path: 'casablanca', component: CasablancaPage },
];





@NgModule({
  declarations: [AppComponent],
  imports: [RouterModule.forRoot(routes),BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  
 
constructor(){}

 }

