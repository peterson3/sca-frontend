import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Barragem } from 'models/barragem';
import { BarragemService } from 'services/barragem.service';

declare var $:any;


@Component({
  selector: 'app-monitoramento-edit',
  templateUrl: './monitoramento-edit.component.html',
  styleUrls: ['./monitoramento-edit.component.css']
})
export class MonitoramentoEditComponent implements OnInit {
  public barragem: Barragem;

  constructor(private router: Router, private barragemService: BarragemService) {
    this.barragem = this.router.getCurrentNavigation().extras.state.barragem;

   }

  ngOnInit(): void {
  }

  OnSubmit(barragemForm){
    console.log("Formulário", barragemForm.value);
      this.barragem.volumeMax = barragemForm.value.long;
      this.barragem.lat = barragemForm.value.lat;
      this.barragem.long =barragemForm.value.long;
     console.log("Barragem Alterada To Submit", this.barragem);
     this.barragemService.updateBarragem({Id: this.barragem.id, Nome: this.barragem.nome, Lat: this.barragem.lat, Long: this.barragem.long, VolumeMax: this.barragem.volumeMax});
     this.showNotification('top','center', 'Barragem Atualizada');
    this.router.navigate(['/monitoramentoBarragem']);
    }

    showNotification(from, align, msg){
      $.notify({
          icon: "pe-7s-gift",
          message: msg
      },{
          type: 'info',
          timer: 500,
          placement: {
              from: from,
              align: align
          }
      });
    }

}
