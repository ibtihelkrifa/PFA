import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Produit} from'./produit';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ImagesService {
  private postUrl = 'http://localhost:8080/produit/';  // URL to web api
  constructor(private http:HttpClient) { }
  affecter(type:String): Observable<Produit[]>
  {  this.http.get<Produit[]>(this.postUrl+type).subscribe(response=>{console.log(response)});
    return this.http.get<Produit[]>(this.postUrl+type); 
  }
}