import { RestServiceProvider } from './../../providers/rest-service/rest-service';
import { Component } from '@angular/core';
import {NavController, ToastController} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';


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
  public data: any;
  public email: any;
  public password: any;

  constructor(
    public navCtrl: NavController, 
    public restService: RestServiceProvider, 
    private storage: Storage, 
    public toastCtrl: ToastController
  ) {
    
  }

  loginApp(){
    if(this.email==null || this.password == null){
      this.showToast("Rellene los campos");
    }else{
      this.restService.post("user/login",{email: this.email, password: this.password, type: 'NORMAL'})
      .then(data => {
        this.data = data;
        if (this.data.response.email != null){
          this.storage.set('isLogged', true);
          this.storage.set('email', this.data.response.email);
          this.storage.set('photo', this.data.response.photo);
          this.navCtrl.setRoot(HomePage);
        }else{
          this.showToast(this.data.response.message);
        }
      });
    }
  }

  showToast(message){
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      showCloseButton: true,
      closeButtonText: "Cerrar"
    });
    toast.present();
  }
}
