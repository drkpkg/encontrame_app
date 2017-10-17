import { publicationInfoPage } from './../publication/publication';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestServiceProvider } from './../../providers/rest-service/rest-service';
import { publicationNewPage } from '../publication_new/publication_new';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [RestServiceProvider]
})

export class HomePage {
  public publications = [];

  constructor(public navCtrl: NavController, public restService: RestServiceProvider){
    this.loadPublications();
  }
  
  loadPublications(){
    this.restService.get('publications', '&from=1&to=10')
    .then(data => {
      this.publications = data.data;
    });
  }

  publicationInfo(publication){
    this.navCtrl.push(publicationInfoPage, {
      data: publication
    })
  }

  doInfinite(infiniteScroll) {
    this.restService.get('publications','&from='+ (this.publications.length+1) +'&to='+(this.publications.length+11))
    .then(data => {
      for (let i = 0; i < data.data.length; i++) {
        this.publications.push( data.data[i] );
      }
      infiniteScroll.complete(); 
    });
  }

  newPublication(){
    this.navCtrl.push(publicationNewPage)
  }
}
