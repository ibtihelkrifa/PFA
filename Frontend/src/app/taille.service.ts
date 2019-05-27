import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { Observable } from 'rxjs/Observable';
import { Taille } from './taille';

@Injectable()
export class TailleService {

  constructor(private http: HttpClient) { }
  private postUrl = 'http://localhost:8080/taille/';  // URL to web api
  gettailles():Observable<Taille[]>
  {
    return this.http.get<Taille[]>(this.postUrl); 

  }
}
