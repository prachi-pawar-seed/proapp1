import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './RoutingDemo/home.component';
import { MessagesComponent } from './RoutingDemo/messages.component';
import { PhotosComponent } from './RoutingDemo/photos.component';
import { NotFoundComponent } from './RoutingDemo/notfound.component';



const routes: Routes = [ {path:'',component:HomeComponent},
{path:'messages',component:MessagesComponent},
{path:'photos',component:PhotosComponent},
{path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
