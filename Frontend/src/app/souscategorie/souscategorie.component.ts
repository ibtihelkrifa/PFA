import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuService } from '../menu.service';
import { SousCategorie } from '../sous-categorie';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-souscategorie',
  templateUrl: './souscategorie.component.html',
  styleUrls: ['./souscategorie.component.css']
})
export class SouscategorieComponent implements OnInit {
categorie:String;
menu$={}
  constructor(private router: Router,private Activatedroute: ActivatedRoute,private menuservice:MenuService){
    this.router.events.subscribe(path => {
      this.Activatedroute.params.subscribe(p=>{this.categorie=p["categorie"]}) ;
      this.menu$=this.getmenu(this.categorie);
      
       console.log(this.categorie+"newwwww");
    });
   }

  ngOnInit() {
  }
   getmenu(categorie):Observable<SousCategorie[]>
   {
     return this.menuservice.getmenu(categorie)
   }
}
