import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { InMemComponent } from './InMemWeb/inmem.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DataService } from './InMemWeb/data.service';
import {FormsModule} from '@angular/forms';
import { CallRestService } from './CallRestDemo/callrest.service';
import { CallRestComponent } from './CallRestDemo/callrest.component';
import { HomeComponent } from './RoutingDemo/home.component';
import { MessagesComponent } from './RoutingDemo/messages.component';
import { NotFoundComponent } from './RoutingDemo/notfound.component';
import { PhotosComponent } from './RoutingDemo/photos.component';



@NgModule({
  declarations: [
    AppComponent, InMemComponent, CallRestComponent , HomeComponent, MessagesComponent
    ,NotFoundComponent, PhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    //InMemoryWebApiModule.forRoot(DataService),
    
  ],
  providers: [CallRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
