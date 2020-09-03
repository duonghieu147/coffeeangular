import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CardDetailComponent } from './card-detail/card-detail.component';
import { CardComponent} from './card.component';

import {  CardRoutingModule } from  './card-routing.module';


@NgModule({
  declarations: [
    CardDetailComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CardRoutingModule
  ]
})
export class CardModule { }
