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
  public publications = [];

  constructor(public navCtrl: NavController, public restService: RestServiceProvider){
    this.loadPublications();
  }
  
  loadPublications(){
    this.restService.get('publications')
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
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.publications.push( this..length );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }
}
