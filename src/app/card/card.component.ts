import { Component, OnInit } from '@angular/core';
import { Card } from  '../card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  card =[
    new Card('Cà Phê Đen',25000,'https://www.highlandscoffee.com.vn/vnt_upload/product/03_2018/thumbs/270_crop_PHIN-SUA-DA.png'),
    new Card('Cà Phê Sữa',30000,'https://www.highlandscoffee.com.vn/vnt_upload/product/05_2018/thumbs/270_crop_CFD.png'),
    new Card('Bạc Xỉu',28000,'https://www.highlandscoffee.com.vn/vnt_upload/product/04_2020/thumbs/270_crop_Bac_Xiu_Da.png'),
  ];
  
}

