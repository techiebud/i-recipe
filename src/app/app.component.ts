import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController, Platform } from 'ionic-angular';
import { Splashscreen, StatusBar } from 'ionic-native';

import { AuthService } from './../services/auth';
import { SigninPage } from './../pages/signin/signin';
import { SignupPage } from './../pages/signup/signup';
import { TabsPage } from './../pages/tabs/tabs';
import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage : any  = TabsPage;
  signinPage = SigninPage;
  signupPage = SignupPage;
  isAuthenticated = false;
  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform, private menuCtrl: MenuController, private authService: AuthService) {
    firebase.initializeApp({
        apiKey: "AIzaSyDPevv_MfTcW7F-ebdxA8pwGh4Q9Ew3u50",
        authDomain: "i-recipe-b7b42.firebaseapp.com"  
    });
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.isAuthenticated = true;
        this.rootPage = TabsPage
      }
      else {
         this.isAuthenticated = false;
         this.rootPage = SigninPage;
        
      }
    })
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  onLoad(page: any)  {
       this.nav.setRoot(page);
       this.menuCtrl.close();
  }

  onLogout() {
    this.authService.logout();
    this.menuCtrl.close();
    this.nav.setRoot(SigninPage);
    console.debug("onlogout");
  }
}
