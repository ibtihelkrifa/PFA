import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import{HttpModule} from '@angular/http';

import { ModalModule } from 'ngx-bootstrap/modal';
import {AlertModule} from 'ngx-bootstrap';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import { VertnavbarComponent } from './vertnavbar/vertnavbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import {FormsModule} from '@angular/forms';
import { ImagesService } from './images.service';
import { MenuService } from './menu.service';
import{HttpClientModule} from '@angular/common/http';
import { CouleurService } from './couleur.service';
import { TailleService } from './taille.service';
import { PromotionService } from './promotion.service';
import { ChatService } from './chat.service';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VertnavbarComponent,
    CarouselComponent,
    FooterComponent,
    routingComponents,
    NavbarComponent,
    ChatComponent],
  imports: [AlertModule.forRoot(),ModalModule.forRoot(),
    BrowserModule,HttpClientModule,FormsModule,
    AppRoutingModule,HttpModule,CarouselModule.forRoot()
  ],
  exports:[ChatComponent],
  providers: [ImagesService, MenuService, CouleurService, TailleService, PromotionService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
