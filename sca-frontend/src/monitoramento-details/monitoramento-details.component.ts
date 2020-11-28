import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Chart = require('chart.js');
import { Barragem } from 'models/barragem';
import { SensorInfoAlteradoEvent } from 'models/sensor-info-alterado-event';
import { BarragemService } from 'services/barragem.service';
import { SignalRService } from 'services/signal-r.service';



@Component({
  selector: 'app-monitoramento-details',
  templateUrl: './monitoramento-details.component.html',
  styleUrls: ['./monitoramento-details.component.css']
})
export class MonitoramentoDetailsComponent implements OnInit {
    public barragem: Barragem;

  public data: SensorInfoAlteradoEvent;
  public myChart: Chart;
  public myChart2: Chart;
  public myChart3: Chart;
  public myChart4: Chart;
  
  constructor(public signalRService: SignalRService, private http: HttpClient, private barragemService: BarragemService, private router: Router) { 
    this.barragem = this.router.getCurrentNavigation().extras.state.barragem;
    console.log('Barragem', this.barragem);

  }

  ngOnInit(): void {
      this.signalRService.startConnection();
    this.signalRService.addTransferSensorDataListener(this.monitoramentoCallback);
    this.startHttpRequest();


    var ctx = 'myChart';
    var ctx2 = 'myChart2';
    var ctx3 = 'myChart3';
    var ctx4 = 'myChart4';

    this.myChart = new Chart(ctx, {
      type: 'line',
      data: {
          datasets: [{
              label: 'Deslocamento',
              data: [],
              fill:false,
              borderColor:"rgb(75, 192, 192)",
              lineTension:0.1
          }],
      },
      options: {
          scales: {
              xAxes: [{
                display: true,
                  type: 'time',
                  position: 'bottom'
              }],
              yAxes: [{
                ticks: {
                  min: -10,
                  suggestedMax: 10
                },
                display: true,
                type: 'linear',
                stacked: true
              }]
          }
      }
    });

    this.myChart2 = new Chart(ctx2, {
      type: 'line',
      data: {
          datasets: [{
              label: 'Piezômetro',
              data: []
          }]
      },
      options: {
          scales: {
              xAxes: [{
                display: true,
                  type: 'time',
                  position: 'bottom'
              }],
              yAxes: [{
                ticks: {
                  min: -10,
                  max: 10
                },
                display: true,
                type: 'linear',
                stacked: true
              }]
          }
      }
    });

    this.myChart3 = new Chart(ctx3, {
      type: 'line',
      data: {
          datasets: [{
              label: 'Inclinômetro',
              data: []
          }]
      },
      options: {
          scales: {
              xAxes: [{
                display: true,
                  type: 'time',
                  position: 'bottom'
              }],
              yAxes: [{
                ticks: {
                  min: -10,
                  max: 10
                },
                display: true,
                type: 'linear',
                stacked: true
              }]
          }
      }
    });

    this.myChart4 = new Chart(ctx4, {
      type: 'line',
      data: {
          datasets: [{
              label: 'Nível de Água',
              data: []
          }]
      },
      options: {
          scales: {
              xAxes: [{
                display: true,
                  type: 'time',
                  position: 'bottom'
              }],
              yAxes: [{
                ticks: {
                  min: -10,
                  max: 10
                },
                display: true,
                type: 'linear',
                stacked: true
              }]
          }
      }
    });
  }

    public monitoramentoCallback = (data) => {
    this.data = data;
    console.log(this.data);
    this.addData(this.myChart, this.data.volume, new Date(this.data.horarioMedicao));
    this.addData(this.myChart2, this.data.volume-1, new Date(this.data.horarioMedicao));
    this.addData(this.myChart3, this.data.volume-5/3, new Date(this.data.horarioMedicao));
    this.addData(this.myChart4, this.data.volume-3/2, new Date(this.data.horarioMedicao));
  }

  public addData(chart: Chart, value: number, time: Date) {
    chart.data.datasets.forEach((dataset) => {
        if (dataset.data.length > 10){
          dataset.data.shift();
        }
        dataset.data.push(value);
    });
    chart.update();
}

  private startHttpRequest() {
    this.http.get('https://localhost:5001/api/sensor')
    .subscribe( res =>{
      console.log(res);
    });
  }

  AlertarBarragem(){
    this.barragemService.alertar("Procedimento de Alerta Iniciado para " + this.barragem.nome + ". Favor iniciar evacuação.");

  }

}
