import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  email: any;
  constructor(public navCtrl: NavController, private storage: Storage) {
    this.storage.get('email').then(value=> {
      this.email = value;
    });
  }

  Logout(){
    this.storage.clear();
    this.navCtrl.setRoot(LoginPage);
  }
}
