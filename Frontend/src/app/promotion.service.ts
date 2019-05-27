import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produit } from './produit';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PromotionService {
  private postUrl = 'http://localhost:8080/promotion/';  // URL to web api

  constructor(private http: HttpClient) { }

  getpromo():Observable<Produit[]>
  {   this.http.get<Produit[]>(this.postUrl).subscribe(Response=>{console.log(Response);});
      return this.http.get<Produit[]>(this.postUrl); 
  } 
}

