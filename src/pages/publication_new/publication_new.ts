import { Component } from '@angular/core';
import { NavParams, ModalController } from 'ionic-angular';
import { RestServiceProvider } from './../../providers/rest-service/rest-service';

@Component({
  selector: 'page-new-publication',
  templateUrl: 'publication_new.html',
})

export class publicationNewPage {
  public photo: any;
  public person_name: any;
  public date_of_disappearance: any;
  public age: any;
  public approximate_age: any;
  public height: any;
  public weight: any;
  public structure: any;
  public nickname: any;
  public clothing: any;
  public contact_email: any;
  public contact_phone: any;
  public sex: any;
  
  constructor(
    public modalCtrl: ModalController, public navParams: NavParams, public restService: RestServiceProvider){
  }

  guardarPublicacion(){
    var params = {
      photo: this.photo,
      person_name: this.person_name,
      date_of_disappearance: this.date_of_disappearance,
      age: this.age,
      approximate_age: this.approximate_age,
      height: this.height,
      weight: this.weight,
      structure: this.structure,
      nickname: this.nickname,
      clothing: this.clothing,
      contact_email: this.contact_email,
      contact_phone: this.contact_phone,
      sex: this.sex
    };

    this.restService.post("publications/create", {'publication':params})
    .then(data => {
      console.log(data.data.message);
    });
    
  }
}
