import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,NavigationStart } from '@angular/router';
import { MenuService } from '../menu.service';
import { SousCategorie } from '../sous-categorie';
import{ImagesService} from '../images.service';
import {  TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Observable } from 'rxjs/Observable';
import { Produit } from '../produit';
import { Couleur } from '../couleur';
import { CouleurService } from '../couleur.service';
import { TailleService } from '../taille.service';
import { Taille } from '../taille';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  tailles$: Observable<any[]>;
  couleurs$: Observable<Couleur[]>;
  modalRef: BsModalRef;
  public type = null;
  sources$;
  coul:any;
  tail:any;
  i:number;
  prix:any;
  price :number=5000;
  
  public categorie;
  menus$;
  constructor(private tailleservice:TailleService,private menuservice:MenuService,private couleurservice:CouleurService,private modalService: BsModalService,private router: Router,private Activatedroute: ActivatedRoute,private imagesService: ImagesService){
    this.router.events.subscribe(path => {
    this.Activatedroute.params.subscribe(p=>{this.prix=p["price"];this.coul=p["coul"];this.tail=p["tail"];this.categorie=p["categorie"];this.type=p["type"];}) ;
  if( this.coul===undefined)
  {
    this.coul="all";
  }
 
  if(this.tail===undefined)
  {
    this.tail="all";
  }
  if(this.prix===undefined)
  {
    this.price=5000;
  }
  else
  {
  this.price=parseFloat(this.prix);
}
this.menus$=this.getmenu(this.categorie); 
  this.couleurs$=this.getcouleurs();
  this.tailles$=this.gettailles();
  this.sources$ =this.getimages(this.type);
  });
 }
 public sources:Array<String>; 
 ngOnInit() {
    
}
openModal(template: TemplateRef<any>) 
{
this.modalRef = this.modalService.show(template);
}

getimages(type):Observable<Produit[]>
{
return( this.imagesService.affecter(type));
}
exists(col:any)
{
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