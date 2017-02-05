import { NavController, NavParams } from 'ionic-angular';

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {

  constructor() {}

  onSignin(form: NgForm) {

      console.debug("onSignIn");
      console.log(form.value);
  }
}
