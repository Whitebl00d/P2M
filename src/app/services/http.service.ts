import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiURL = 'https://phish-detection-api.herokuapp.com/predict?url=';
  constructor(private http:HttpClient) { }
  send(url:string){
    return this.http.get(this.apiURL + url);
  }
}