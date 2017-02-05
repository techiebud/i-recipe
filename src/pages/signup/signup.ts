import { AlertController, LoadingController } from "ionic-angular";

import { AuthService } from './../../services/auth';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(private authService: AuthService, private loadingCtrl: LoadingController, private alertCtrl: AlertController) {}

   onSignup(form: NgForm) {
    // console.debug("onSignUp");
     //onsole.log(form);
     const loading = this.loadingCtrl.create({
        content: "Signing you up...." 
     });
     loading.present();   
     

     this.authService.signUp(form.value.email, form.value.password)
      .then(data => {
          loading.dismiss();
          console.log(data);
      })
      .catch(error => {
          loading.dismiss();
          const alert = this.alertCtrl.create({
             title: 'Signup failed!',
             message: error.message,
             buttons: ['Ok']
          })
          console.error(error); 
          alert.present();
      })
      
      
     
     
   }

}
