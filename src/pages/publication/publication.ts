import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PublicationsServiceProvider } from './../../providers/publications-service/publications-service';

@Component({
  selector: 'page-publication',
  templateUrl: 'publication.html',
  providers: [PublicationsServiceProvider]
})

export class publicationInfoPage {
  public publication: any;

  constructor(
    public navCtrl: NavController, 
    public publicationsService: PublicationsServiceProvider,
    private navParams: NavParams){
      this.load(this.navParams.get('id'));
  }

  load(id) {
    this.publicationsService.load('publications/' + id)
    .then(data => {
      this.publication = data;
    });
  }  
}
