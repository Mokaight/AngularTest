import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class LoadingService implements OnInit {
  ngOnInit(){
  }
  constructor(private HttpClient: HttpClient){
  }
  //anyData = new AnyData<any[]>();
  loadedBookingAPI = [];
  loadedRecordsAPI = [];

  getDataFromServer(){
    return this.HttpClient.get<any>('https://www.ghusse.com/afidium/response.json');
  }
}
