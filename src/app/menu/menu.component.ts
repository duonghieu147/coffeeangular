import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
  item_card=['caphe','tra','merchandise'];
  @Input()
  item_cards=this.item_card[0];
  ngOnInit(): void {
  }
  myClickCaphe(event){
    alert("Show ca phe ");
    this.item_cards=this.item_card[0];
  }
}
