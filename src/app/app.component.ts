import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { Storage } from '@ionic/storage';

@Component({
  templateUrl: 'app.html',
  template: `<ion-nav *ngIf="showRoot" [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage: any = LoginPage;
  showRoot = false;
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private storage: Storage) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
    
    storage.get('isLogged').then(logged => {
      if (logged) {
         this.rootPage = TabsPage;
      }
      this.showRoot = true;
  });
  }
}
