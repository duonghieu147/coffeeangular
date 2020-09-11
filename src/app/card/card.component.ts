import { Component, OnInit, Input ,AfterContentInit} from '@angular/core';

import { Card } from '../card';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  item_card=['caphe','tra','merchandise'];
  item_cards=this.item_card[1];

  getall:Card;
  constructor (
    private apiService:ApiService,
  ){}

  ngOnInit():void {
    this.getAllCaphe();
    //this.getAllTra();
    //this.getAllMerchandise();
  }
  ngAfterViewInit():void {
    if(this.item_cards=='caphe'){
      this.getAllCaphe();
    }
    else if(this.item_cards=='tra'){
      this.getAllTra();
    }
    else if(this.item_cards='merchandise'){
      this.getAllMerchandise();
    }
  }
  
  getAllCaphe(){
    this.apiService.getAllCaphe().subscribe(repone => this.getall=repone)
  }
  getAllTra(){
    this.apiService.getAllTra().subscribe(repone => this.getall=repone)
  }
  getAllMerchandise(){
    this.apiService.getAllMerchandise().subscribe(repone => this.getall=repone)
  }

  

}

