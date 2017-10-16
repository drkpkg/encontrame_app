import { Component } from '@angular/core';
import { NavParams, ModalController } from 'ionic-angular';
import { RestServiceProvider } from './../../providers/rest-service/rest-service';

@Component({
  selector: 'page-publication',
  templateUrl: 'publication.html',
})

export class publicationInfoPage {
  public publication: any;

  constructor(
    public modalCtrl: ModalController, public navParams: NavParams){
      this.publication = this.navParams.get('data');
  }
}
