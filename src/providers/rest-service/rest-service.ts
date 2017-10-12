import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RestServiceProvider {
  data: any;
  parsedUrl (url){ 
    this.data = [];
    return 'http://localhost:3000/api/v1/'+ url +'?token=LHIuovDZqiz7d8pwYaoHGGkzTBHdQReH';
  }
  
  constructor(public http: Http) {}

  get(url) {
    console.log("Procesando " + url)
    if (this.data) {
      return Promise.resolve(this.data);
    }
  
    return new Promise(resolve => {
      this.http.get(this.parsedUrl(url))
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  post(url, params){
    
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });
    
    return new Promise(resolve => {
      this.http.post(this.parsedUrl(url), params, options)
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
        resolve(this.data);
      });
    });
  }

  put(url, params){
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
    let options = new RequestOptions({ headers: headers });
    
    return new Promise(resolve => {
      this.http.put(this.parsedUrl(url),params, options)
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
      });
    });
  }

  delete(url, params){
    var parsedUrl = 'http://localhost:3000/api/v1/'+ url +'?token=LHIuovDZqiz7d8pwYaoHGGkzTBHdQReH';
    
    return new Promise(resolve => {
      this.http.delete(parsedUrl,params)
      .map(res => res.json())
      .subscribe(data => {
        this.data = data;
      });
    });
  }

}
