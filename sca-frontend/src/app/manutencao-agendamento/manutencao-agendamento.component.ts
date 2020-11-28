import { Component, OnInit } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { Router } from '@angular/router';
import { Ativo } from 'models/ativo';
import { AtivosService } from 'services/ativos.service';
import { Manutencao } from 'models/manutencao';

@Component({
  selector: 'app-manutencao-agendamento',
  templateUrl: './manutencao-agendamento.component.html',
  styleUrls: ['./manutencao-agendamento.component.css']
})

export class ManutencaoAgendamentoComponent implements OnInit {
  public calendar: Calendar;
  public ativo: Ativo;
  public ativoCompleto: Ativo;
  public manutencaoACadastrar: Manutencao;

  constructor(private router: Router, private ativosService: AtivosService) { 
    console.log('Parametros que chegaram', this.router.getCurrentNavigation().extras.state);
    this.ativo = this.router.getCurrentNavigation().extras.state.ativo;
    this.ativosService.getAtivoById(this.ativo.id).subscribe((retorno: any) => { 
      console.log(retorno);
      let manutencoes = retorno.manutencoes;
  
      for (var i = 0; i < manutencoes.length; i++){
        let titulo = "Manutenção de " + retorno.nome; 
        this.calendar.addEvent({title: titulo, date: manutencoes[i].data, allDay: true});

      }

    });
    
  }

  ngOnInit(): void {
    var calendarEl = document.getElementById('calendar');

    // var calendar = new Calendar(calendarEl, {
    //   timeZone: 'UTC',
    //   initialView: 'dayGridMonth',
    //   events: 'https://fullcalendar.io/demo-events.json',
    //   editable: true,
    //   selectable: true
    // });
  
    this.calendar = new Calendar(calendarEl, {
      plugins: [ dayGridPlugin ],
      events: [],
      editable: true,
      selectable: true
    });

    this.calendar.render();

  }

  OnSubmit(form){
    console.log(form.value);
    let titulo = 'Manutenção de' + this.ativo.nome;
    this.manutencaoACadastrar = {
      data: form.value.dataManutencao,
      isRealizada: false
    }
    this.CadastrarManutencao(this.manutencaoACadastrar);
    this.calendar.addEvent({title: titulo, date: form.value.dataManutencao});
  }

  CadastrarManutencao(manutencao: Manutencao){
    this.ativosService.insertManutencao(this.ativo.id, manutencao);
  }



}
