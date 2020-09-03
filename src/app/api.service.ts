import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from './card';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient:HttpClient,
  ) { }
  baseurl='http://localhost:3000/';
  httpOptions= {
    header:new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  getAllCaphe():Observable<Card>{
    return this.httpClient.get<Card>(this.baseurl+'caphe')
  }
  getAllTra():Observable<Card>{
    return this.httpClient.get<Card>(this.baseurl+'tra')
  }
  getAllMerchandise():Observable<Card>{
    return this.httpClient.get<Card>(this.baseurl+'merchandise')
  }
}
