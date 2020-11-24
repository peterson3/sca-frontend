import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ativo } from 'models/ativo';
import { TipoAtivo } from 'models/tipo-ativo';
import { fromPromise } from 'rxjs/internal-compatibility';
import { AtivosService } from 'services/ativos.service';

declare var $:any;


@Component({
  selector: 'app-ativo-add',
  templateUrl: './ativo-add.component.html',
  styleUrls: ['./ativo-add.component.css']
})
export class AtivoAddComponent implements OnInit {

  url = 'https://localhost:44320/ativo';
  private ativo: Ativo;
  private tipoAtivos: TipoAtivo[];
  
  constructor(private router: Router, private httpClient: HttpClient, private ativoService: AtivosService) { }

  ngOnInit(): void {
    this.getTiposAtivos();
  }

  OnSubmit(form){
    console.log(form.value);
    this.ativo = {
      Nome: form.value.nome,
      Categoria :form.value.categoria,
      DataCompra : form.value.dataCompra,
      DataUltimaManutencao : form.value.dataUltimaManutencao,
      Fornecedor : form.value.fornecedor,
      Identificador : form.value.identificador,
      Modelo : form.value.modelo,
      tipoId : form.value.tipoAtivo
      }
    this.ativoService.insertAtivo(this.ativo);    


    console.log("AtivoToAdd", this.ativo)
    this.showNotification('top','center', 'Ativo Adicionado');
    this.router.navigate(['/ativos']);
 }

 getTiposAtivos(){
  this.ativoService.getTipoAtivos().subscribe((tipoAtivos: TipoAtivo[]) => {
      this.tipoAtivos = tipoAtivos;
      console.log(tipoAtivos);
      console.log(this.tipoAtivos);
    });
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
