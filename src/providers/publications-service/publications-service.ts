import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PublicationsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PublicationsServiceProvider {
  data: any;

  constructor(public http: Http) {
    //this.http.get('http://localhost:3000/api/v1/');
  }

  load(url) {
    if (this.data) {
      return Promise.resolve(this.data);
    }
  
    return new Promise(resolve => {
      this.http.get('http://localhost:3000/api/v1/'+ url +'?token=LHIuovDZqiz7d8pwYaoHGGkzTBHdQReH')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
}
