import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

import { Card } from './card';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'news',component:NewsComponent, pathMatch: 'full'
  },
  {
    path:'home',component:HomeComponent, 
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'caphe',component:Card, 
  },
  {
    path:'login',component:LoginComponent,
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
