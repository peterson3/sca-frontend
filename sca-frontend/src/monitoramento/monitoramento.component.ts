import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Chart = require('chart.js');
import { Barragem } from 'models/barragem';
import { SensorInfoAlteradoEvent } from 'models/sensor-info-alterado-event';
import { BarragemService } from 'services/barragem.service';
import { SignalRService } from 'services/signal-r.service';


declare interface TableData {
  headerRow: string[];
  dataRows: Barragem[];
}

@Component({
  selector: 'app-monitoramento',
  templateUrl: './monitoramento.component.html',
  styleUrls: ['./monitoramento.component.css']
})
export class MonitoramentoComponent implements OnInit {


  // public data: SensorInfoAlteradoEvent;
  // public myChart: Chart;
  // public myChart2: Chart;
  public tableData1: TableData;
  
   url = 'https://localhost:5001/api/barragem';
   private barragens: Barragem[];
  // private barragemSelecionada: Barragem;
  public busca: string;




  constructor(public signalRService: SignalRService, private http: HttpClient, private barragemService: BarragemService, private router: Router) { }



  ngOnInit(): void {
    this.tableData1 = {
      headerRow: ['Id', 'Nome', 'Ações'],
       dataRows: <Barragem[]>[]
};

     this.getBarragens();

  }
  


  getBarragens(){
    this.barragemService.getBarragens().subscribe((barragens: Barragem[]) => {
        this.barragens = barragens;

        this.tableData1 = {
          headerRow : ['Id', 'Nome', 'Ações'],
          dataRows :  barragens
      };

        console.log('Barragens', barragens);
        console.log('this Barragens', this.barragens);
      });
   }

   Monitorar(barragem: Barragem){
    console.log('Barragem a Monitorar:', barragem);
  
    this.router.navigate(['/monitoramentoBarragem/details'], { state: {barragem: barragem}});
  }

  EditarBarragem(barragem: Barragem){
    console.log('Barragem a Editar:', barragem);
  
    this.router.navigate(['/monitoramentoBarragem/edit'], { state: {barragem: barragem}});
  }

  getBarragensFiltradas(data: string) {
    this.barragemService.getBarragensFiltradas(data).subscribe((barragens: Barragem[]) => {
      this.barragens = barragens;
      this.tableData1 = {
        headerRow : ['Id', 'Nome', 'Ações'],
        dataRows :  barragens
    };
    });
  }

  BuscarBarragem(data: string){
    if (data.trim() != ''){
        this.getBarragensFiltradas(data);
    }
  }



}
