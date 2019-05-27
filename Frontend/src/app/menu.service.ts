import { Injectable } from '@angular/core';
import{Http} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import{SousCategorie} from'./sous-categorie';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class MenuService {
  private postUrl = 'http://localhost:8080/souscategorie/';  // URL to web api

  constructor(private http: HttpClient) { 
    
  }

  getmenu(categorie:String):Observable<SousCategorie[]>
  {   this.http.get<SousCategorie[]>(this.postUrl+categorie).subscribe(Response=>(console.log(Response)));
      return this.http.get<SousCategorie[]>(this.postUrl+categorie); 
  }   
}
