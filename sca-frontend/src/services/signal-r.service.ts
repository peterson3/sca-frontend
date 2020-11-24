import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { SensorInfoAlteradoEvent } from 'models/sensor-info-alterado-event';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  public data: SensorInfoAlteradoEvent;
  
  private hubConnection: signalR.HubConnection;

  public startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
    .withUrl('https://localhost:5001/sensor')
    .build();

    this.hubConnection
    .start()
    .then(() => console.log('Connection Started'))
    .catch( err => console.log('Error while starting connection: ' + err));
  }

  public addTransferSensorDataListener(callback) 
  {
     this.hubConnection.on('transfersensordata', callback);
  }

  constructor() { }
}
