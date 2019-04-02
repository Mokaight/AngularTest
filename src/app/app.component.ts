import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { LoadingService } from './services/loading.service';
import { Observable } from 'rxjs';
import { DisplayedInfo } from './class/DisplayedInfo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title  = "Welcome to Afidium Test";
  TripsInfo: any[];
  flag :boolean = false;
  private productsObservable : Observable<any[]> ;
  ngOnInit(){

  }
  constructor(private loadingService: LoadingService){
    this.loadingService.getDataFromServer().subscribe((res : any[])=>{
          let tempoArray: any[];
          this.TripsInfo = this.PackingInfo(res,tempoArray);
          this.flag = true;
          console.log(this.TripsInfo);
    });

  }
  getInstanceOfTrip(i: number){
    return this.TripsInfo[i];
  }

  PackingInfo(res: any[], EveryTripArray: any[]){
      //test du xStatus
      EveryTripArray = new Array();
      res['data']['booking'].forEach(function(value){

        var DInfo = new DisplayedInfo();
        DInfo.xStatus = value['xStatus'];
        DInfo.code = value['code'];
        if(value['customer'] != undefined){
          if (DInfo.ClientFirstName == undefined){
              DInfo.ClientFirstName = value['customer']['firstName'];
              DInfo.ClientLastName = value['customer']['lastName'];
              DInfo.NumberOfClients = value['traveller'].length;
          }
        }
        if(value['host'] != undefined){
          DInfo.host = value['host'];
        }
        if(value['xStatus'] != undefined){
          DInfo.xStatus = value['xStatus'];
        }
        if(value['whenCreated'] != undefined){
          DInfo.created = value['whenCreated'];
        }
        if(value['agent'] != undefined){
          DInfo.AgentFirstName = value['agent']['firstName'];
          DInfo.AgentLastName = value['agent']['lastName'];
        }
        if(value['total'] != undefined){
          DInfo.price = value['total']['0']['amount'];
          DInfo.currency = value['total']['0']['currency'];
        }
        if(value['begin'] != undefined){
          DInfo.BeginTrip = value['begin'];
        }
        if(value['end'] != undefined){
          DInfo.EndTrip = value['end'];
        }
        if(value['sector'] != undefined){
          let tempCode = "nil";
          let tempDifferentAR = "nil";
          let EntireTrip = [];
          value['sector'].forEach(function(va){
          if(tempCode == va['from']['airport']['code']){
            //We do have a multiple connection
            EntireTrip.push(va['to']['airport']['code']);
          }
          //if the last airport wasn't the same
          else {
            //if we are not looking the starting airport
            if(tempCode !='nil'){
              EntireTrip.push("PAUSE");
            }
            EntireTrip.push(va['from']['airport']['code']);
            EntireTrip.push(va['to']['airport']['code']);
          }
          tempCode = va['to']['airport']['code'];
          });
          DInfo.EntireTrip = EntireTrip;

        }
        EveryTripArray.push(DInfo);

     });
     return EveryTripArray;
   }


}
