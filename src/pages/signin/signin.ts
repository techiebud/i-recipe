import { AlertController, LoadingController } from "ionic-angular";

import { AuthService } from './../../services/auth';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {

  constructor(private authService: AuthService, 
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController) {}

  onSignin(form: NgForm) {
        const loading = this.loadingCtrl.create({
           content: 'Signing you in....'
           
        });
        loading.present();
        this.authService.signIn(form.value.email, form.value.password)  
          .then((data) => {
              loading.dismiss();
              console.log(data);
          })
          .catch((error) => {
              loading.dismiss();
              const alert = this.alertCtrl.create({
                  title: 'Signin failed!',
                  message: error.message,
                  buttons: ['OK']
              });
              alert.present();
              console.error(error.message);
          })

            
          
  }
}
