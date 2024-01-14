import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  screen: any = 'signin';

  username: string | undefined;
  password: string | undefined;
formData: any;
 
  login(){
    if (this.username === 'Yacen' && this.password === '1234') {
      this.router.navigate(['/home']);
    } else {
      console.error('Erreur de connexion : Nom d\'utilisateur ou mot de passe incorrect.');
    }
  }
  constructor(private router: Router) { }

  
  ngOnInit() {
    return
  }

}
