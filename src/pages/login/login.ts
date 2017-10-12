import { RestServiceProvider } from './../../providers/rest-service/rest-service';
import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [RestServiceProvider]
})

export class LoginPage {
  data: any;
  public email: any;
  public password: any;

  constructor(public navCtrl: NavController, public restService: RestServiceProvider, private storage: Storage) {
    
  }

  loginApp(){
    this.restService.post("user/login",{email: this.email, password: this.password, type: 'NORMAL'})
    .then(data => {
      this.data = data;
      if (this.data.response){
        this.storage.set('isLogged', true);
        this.storage.set('email', this.data.response.email);
        this.storage.set('photo', this.data.response.photo);
      }
    });
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LoginPage');
  }

}
