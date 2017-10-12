import { publicationInfoPage } from './../publication/publication';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PublicationsServiceProvider } from './../../providers/publications-service/publications-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [PublicationsServiceProvider]
})

export class HomePage {
  public publication: any;
  public publications: any;

  constructor(public navCtrl: NavController, public publicationsService: PublicationsServiceProvider){
    this.loadPublications();
  }
  
  loadPublications(){
    this.publicationsService.load('publications')
    .then(data => {
      this.publications = data.data;
    });
  }

  publicationInfo(id){
    this.publicationsService.load('publications/' + id)
    .then(data => {
      this.publication = data.data;
      this.navCtrl.push(publicationInfoPage, {
        data: this.publication
      })
    });
  }
}
