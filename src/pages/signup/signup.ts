import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor() {}

   onSignup(form: NgForm) {
     console.debug("onSignUp");
     console.log(form);
     
   }

}
