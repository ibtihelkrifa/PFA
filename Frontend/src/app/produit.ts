import { SousCategorie } from "./sous-categorie";
import {Couleur} from "./couleur";
import { Observable } from "rxjs/Observable";
import {Taille} from "./taille";
export class Produit {
    id:any;
    date:any;
    name:any;
    prix:any;
    url:any;
    souscategorie:SousCategorie;
    couleur:Couleur[];
    taille:Taille[];

}
