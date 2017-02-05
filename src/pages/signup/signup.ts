import { AuthService } from './../../services/auth';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(private authService: AuthService) {}

   onSignup(form: NgForm) {
    // console.debug("onSignUp");
     //onsole.log(form);
     this.authService.signUp(form.value.email, form.value.password)
      .then(data => console.log(data))
      .catch(error => console.log(error));
            
      
      
     
     
   }

}
