export class DisplayedInfo{
  xStatus: string;
  code: string;
  host: string;
  created: string;
  AgentFirstName: string;
  AgentLastName: string;
  ClientFirstName: string;
  ClientLastName: string;
  NumberOfClients: number;
  EntireTrip : any[];
  BeginTrip: string;
  EndTrip: string;
  price : number;
  currency: string;

  public toString(){
    return "Le Status : " + this.xStatus
          + " le code : " + this.code
          + " l'host : " + this.host
          + " created : " + this.created
          + " AgentFirstName : " + this.AgentFirstName
          + " AgentLastName : " + this.AgentLastName
          + " ClientFirstName : " + this.ClientFirstName
          + " ClientLastName : " + this.ClientLastName
          + " NumberOfClients : " + this.NumberOfClients
          + " EntireTrip : " + this.EntireTrip
          + " BeginTrip : " + this.BeginTrip
          + " EndTrip : " + this.EndTrip
          + " price : " + this.price
          + " currency : " + this.currency
  }
}
