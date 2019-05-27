import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{RouterModule,Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';



import {GalleryComponent} from './gallery/gallery.component';
import {PromotionComponent} from './promotion/promotion.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CategorieComponent } from './categorie/categorie.component';
import { SouscategorieComponent } from './souscategorie/souscategorie.component';
const routes: Routes = [
  
  { path: '', component: CategorieComponent },
  { path: 'promotion', component: PromotionComponent },
  { path: ':categorie', component: SouscategorieComponent },
  { path: ':categorie/:type', component: GalleryComponent },
  { path: ':categorie/:type/:tail/:coul', component: GalleryComponent },
  { path: ':categorie/:type/:tail/:coul/:price', component: GalleryComponent }];
@NgModule({
  exports: [ RouterModule ],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  declarations: []
})

export class AppRoutingModule { }
export const routingComponents = [CategorieComponent,PromotionComponent,GalleryComponent,SouscategorieComponent];