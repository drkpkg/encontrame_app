import { publicationInfoPage } from './../publication/publication';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestServiceProvider } from './../../providers/rest-service/rest-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [RestServiceProvider]
})

export class HomePage {
  public publication: any;
  public publications: any;

  constructor(public navCtrl: NavController, public publicationsService: RestServiceProvider){
    this.loadPublications();
  }
  
  loadPublications(){
    this.publicationsService.get('publications')
    .then(data => {
      this.publications = data;
    });
  }

  publicationInfo(id){
    this.publicationsService.get('publications/' + id)
    .then(data => {
      this.publication = data;
      this.navCtrl.push(publicationInfoPage, {
        data: this.publication
      })
    });
  }
}
