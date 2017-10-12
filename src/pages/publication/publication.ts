import { Component } from '@angular/core';
import { NavParams, ModalController } from 'ionic-angular';
import { PublicationsServiceProvider } from './../../providers/publications-service/publications-service';

@Component({
  selector: 'page-publication',
  templateUrl: 'publication.html',
  providers: [PublicationsServiceProvider]
})

export class publicationInfoPage {
  public publication: any;

  constructor(
    public modalCtrl: ModalController, public publicationsService: PublicationsServiceProvider, public navParams: NavParams){
      this.publication = this.navParams.get('data')[0];
  }
}
