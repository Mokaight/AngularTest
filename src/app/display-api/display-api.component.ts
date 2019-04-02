import { Component, OnInit,Input } from '@angular/core';
import { LoadingService } from '../services/loading.service';
import { DisplayedInfo } from '../class/DisplayedInfo';
@Component({
  selector: 'app-display-api',
  templateUrl: './display-api.component.html',
  styleUrls: ['./display-api.component.css']
})
export class DisplayAPIComponent implements OnInit {

  @Input() DisplayInfo: DisplayedInfo;
  @Input() index: number;

  constructor(private loadingService: LoadingService) {
  }

  ngOnInit() {
    //  console.log("COUCOU : " + this.DisplayInfo.toString());
  }

  getCode(){
    return this.DisplayInfo.code;
  }
  getHost(){
    return this.DisplayInfo.host;
  }
  getCreated(){
    return this.DisplayInfo.created;
  }
  getxStatus(){
    return this.DisplayInfo.xStatus;
  }
  getAgentLastName(){
    if(this.DisplayInfo.AgentLastName == undefined){
      return false;
    }
    return this.DisplayInfo.AgentLastName;
  }
  getAgentFirstName(){
    return this.DisplayInfo.AgentFirstName;
  }
  getClientLastName(){
    if(this.DisplayInfo.ClientLastName == undefined){
      return false;
    }
    return this.DisplayInfo.ClientLastName;
  }
  getClientFirstName(){
    return this.DisplayInfo.ClientFirstName;
  }
  getNumberOfClients(){
    return this.DisplayInfo.NumberOfClients;
  }
  getEntireTrip(){
    let StringTemp= "";
    let i=0;
    if(this.DisplayInfo.EntireTrip != undefined){
      let j  = this.DisplayInfo.EntireTrip.length;
      this.DisplayInfo.EntireTrip.forEach(function(value){
        if(value == "PAUSE"){
          StringTemp = StringTemp + "  ||  ";
        }else{
          if(i+1 == j){
            StringTemp = StringTemp + value;
          }
          else{
            
            StringTemp = StringTemp + value + "=>" ;
          }

        }
        i = i+1;
        });
    }

    return StringTemp;
  }
  getBeginTrip(){
    if(this.DisplayInfo.BeginTrip == undefined){
      return false;
    }
    return this.DisplayInfo.BeginTrip;
  }
  getEndTrip(){
    return this.DisplayInfo.EndTrip;
  }
  getPrice(){
    return this.DisplayInfo.price;
  }
  getCurrency(){
    return this.DisplayInfo.currency;
  }
}
