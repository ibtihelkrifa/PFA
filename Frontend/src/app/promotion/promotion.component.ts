import { Component, OnInit, TemplateRef } from '@angular/core';
import { PromotionService } from '../promotion.service';
import { Observable } from 'rxjs/Observable';
import { Produit } from '../produit';
import { BsModalRef } from 'ngx-bootstrap';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Couleur } from '../couleur';
import { CouleurService } from '../couleur.service';
import { TailleService } from '../taille.service';
import { Taille } from '../taille';
import { SousCategorie } from '../sous-categorie';
import { MenuService } from '../menu.service';
import { ImagesService } from '../images.service';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.css']
})
export class PromotionComponent implements OnInit {
  type(arg0: any): any {
    throw new Error("Method not implemented.");
  }
  tailles$: Observable<Taille[]>;
  couleurs$: Observable<Couleur[]>;
  sources$={};
  modalRef: BsModalRef;
  constructor(private promotionService: PromotionService,private tailleservice:TailleService,private couleurservice:CouleurService,private modalService: BsModalService,private imagesService: ImagesService) { 
  this.sources$=this.getprod();
 
  

  }

  ngOnInit() {
  }
  getprod():Observable<Produit[]>
  {  
     return this.promotionService.getpromo();
  }
  openModal(template: TemplateRef<any>) 
  {
  this.modalRef = this.modalService.show(template);
  }


}
