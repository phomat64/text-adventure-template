import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import firebase from 'firebase';
import { AuthService } from '../services/auth';

import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';

import { MenuPage } from '../pages/menu/menu';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = MenuPage;
  signinPage = SigninPage;
  signupPage = SignupPage;
  isAuthenticated = true;
  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform,
              private menuCtrl: MenuController,
              private authService: AuthService) {
    firebase.initializeApp({
      apiKey: "AIzaSyBEbhsK39RbJzV6Ig3j48XxYzhoDDckirc",
      authDomain: "ionic2-recipebook-b52c4.firebaseapp.com",
      databaseURL: "https://ionic2-recipebook-b52c4.firebaseio.com",
      projectId: "ionic2-recipebook-b52c4",
      storageBucket: "ionic2-recipebook-b52c4.appspot.com",
      messagingSenderId: "886914227904"
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });

    this.authService.signin('test@test.com', 'testtest')
    .then(data => {
      console.log('signed in');
    })
    .catch(error => {
      console.log('error signing in');
    });
  }

  onLoad(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  onLogout() {
    // this.authService.logout();
    this.menuCtrl.close();
  }
}
