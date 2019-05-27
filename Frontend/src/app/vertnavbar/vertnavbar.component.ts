import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,NavigationStart } from '@angular/router';
import { MenuService } from '../menu.service';
import { SousCategorie } from '../sous-categorie';
import { Observable } from 'rxjs/Observable';
import { Couleur } from '../couleur';
import { CouleurService } from '../couleur.service';
import { TailleService } from '../taille.service';
import { Taille } from '../taille';
@Component({
  selector: 'app-vertnavbar',
  templateUrl: './vertnavbar.component.html',
  styleUrls: ['./vertnavbar.component.css']
})
export class VertnavbarComponent implements OnInit {
  public categorie;
  menus$;
  couleurs$;
  tailles$;
  //public menu: Array<any>;
  constructor(private router: Router,private Activatedroute: ActivatedRoute,private tailleservice:TailleService,private couleurservice:CouleurService,private menuservice:MenuService) {
    this.router.events.subscribe(path => {
      this.Activatedroute.params.subscribe(p=>this.categorie=p["categorie"]) ;
     //this.menu=this.getmenu(this.categorie);
     this.menus$=this.getmenu(this.categorie); 
     this.couleurs$=this.getcouleurs();
     this.tailles$=this.gettailles();
     console.log('categorie menu');
       console.log(this.categorie);
      console.log(typeof this.menus$);
     // this.menu=this.getmenu(this.categorie);
      //console.log(this.menu);
    });
   }
   

  ngOnInit() {
  }
   getmenu(categorie):Observable<SousCategorie[]>
   {
     return(this.menuservice.getmenu(categorie));
   }
   getcouleurs():Observable<Couleur[]>
   {
    return this.couleurservice.getcouleurs(); 
   }
   gettailles():Observable<Taille[]>
   {
    return this.tailleservice.gettailles(); 
   }

}
