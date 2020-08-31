import { Component } from '@angular/core';
import { Card } from './card';
import {ApiService} from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test1';
  getall:Card;
  constructor (
    private apiService:ApiService,
  ){}
  ngOnInit():void {
    //this.getAll();
    this.getAllTra();
  }
  getAll(){
    this.apiService.getAllCaphe().subscribe(repone => this.getall=repone)
  }
  getAllTra(){
    this.apiService.getAllTra().subscribe(repone => this.getall=repone)
  }
  
}

