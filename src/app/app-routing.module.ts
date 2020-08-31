import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { Card } from './card';

const routes: Routes = [
  {
    path:'news',component:NewsComponent
  },
  {
    path:'home',component:HomeComponent
  },
  // {
  //   path:'contact',component:ContactComponent
  // },
  {
    path:'ca-phe',component:Card
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
