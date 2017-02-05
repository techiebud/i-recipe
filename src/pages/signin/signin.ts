import { NavController, NavParams } from 'ionic-angular';

import { AuthService } from './../../services/auth';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {

  constructor(private authService: AuthService) {}

  onSignin(form: NgForm) {

        this.authService.signIn(form.value.email, form.value.password)  
          .then((data) => {
              console.log(data);
          })
          .catch((error) => {
              console.error(error.message);
          })

            
          
  }
}
