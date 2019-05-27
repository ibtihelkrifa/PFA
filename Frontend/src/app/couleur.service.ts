import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { Observable } from 'rxjs/Observable';
import { Couleur } from './couleur';

@Injectable()
export class CouleurService {

  constructor(private http: HttpClient) { }
  private postUrl = 'http://localhost:8080/couleur/';  // URL to web api
  getcouleurs():Observable<Couleur[]>
  {
    return this.http.get<Couleur[]>(this.postUrl); 

  }
}
