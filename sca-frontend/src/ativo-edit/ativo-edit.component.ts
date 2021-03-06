import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { Ativo } from 'models/ativo';
import { TipoAtivo } from 'models/tipo-ativo';
import { AtivosService } from 'services/ativos.service';

declare var $:any;

@Component({
  selector: 'app-ativo-edit',
  templateUrl: './ativo-edit.component.html',
  styleUrls: ['./ativo-edit.component.css']
})
export class AtivoEditComponent implements OnInit {

  url = environment.baseUrl + 'ativosService';
  public ativo: Ativo;
  public tipoAtivos: TipoAtivo[];

  
  constructor(private router: Router, private httpClient: HttpClient, private ativoService: AtivosService) { 
   
    console.log('Parametros que chegaram', this.router.getCurrentNavigation().extras.state);
    this.ativo = this.router.getCurrentNavigation().extras.state.ativo;
  }

  ngOnInit(): void {
    this.getTiposAtivos();
 
  }

  OnSubmit(form){
    console.log(form.value);
    // console.log('ativo tipo id ', this.ativo.tipoId);
    let ativoUpdated: Ativo = {
      id: this.ativo.id,
      nome: form.value.nome,
      categoria :form.value.categoria,
      dataCompra : this.ativo.dataCompra,
      dataUltimaManutencao : this.ativo.dataUltimaManutencao,
      fornecedor : form.value.fornecedor,
      identificador : form.value.identificador,
      modelo : form.value.modelo,
      tipoId : form.value.tipoAtivo
      };
    
      console.log("AtivoToUpdate", ativoUpdated)
    this.ativoService.updateAtivo(ativoUpdated);    
    this.showNotification('top','center', 'Ativo Atualizado');
    this.router.navigate(['/ativos']);
 }

 getTiposAtivos(){
  this.ativoService.getTipoAtivos().subscribe((tipoAtivos: TipoAtivo[]) => {
      this.tipoAtivos = tipoAtivos;
      console.log(tipoAtivos);
      console.log(this.tipoAtivos);
    });
 }

 parseDate(dateString: string): Date {
  if (dateString) {
      return new Date(dateString);
  }
  return null;
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
