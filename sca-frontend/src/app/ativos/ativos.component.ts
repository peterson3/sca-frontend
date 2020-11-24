import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Ativo } from 'models/ativo';
import { AtivosService } from 'services/ativos.service';

declare var $:any;


declare interface TableData {
    headerRow: string[];
    dataRows: Ativo[];
}

@Component({
  selector: 'app-tables',
  templateUrl: './ativos.component.html',
  styleUrls: ['./ativos.component.css']
})
export class AtivosComponent implements OnInit {
    public tableData1: TableData;
    public tableData2: TableData;
    public ativos: Ativo[];
    public busca: string;

  constructor(private ativosService: AtivosService, private router: Router) { }

  ngOnInit() {
         this.tableData1 = {
          headerRow: ['Id', 'Nome', 'Modelo', 'Identificador', 'DataCompra', 'DataCadastro', 'DataUltimaManutencao', 'Categoria', 'Fornecedor', 'Ações'],
           dataRows: <Ativo[]>[]
    };

 
    this.getAtivos();
  }

  getAtivos() {
    this.ativosService.getAtivos().subscribe((ativos: Ativo[]) => {
        this.ativos = ativos;
        this.tableData1 = {
            headerRow : ['Id', 'Nome', 'Modelo', 'Identificador', 'DataCompra', 'DataCadastro', 'DataUltimaManutencao', 'Categoria', 'Fornecedor', 'Ações'],
            dataRows :  ativos
        };
    });
  }

  getAtivosFiltrados(data: string) {
    this.ativosService.getAtivosFiltrados(data).subscribe((ativos: Ativo[]) => {
        this.ativos = ativos;
        this.tableData1 = {
            headerRow : ['Id', 'Nome', 'Modelo', 'Identificador', 'DataCompra', 'DataCadastro', 'DataUltimaManutencao', 'Categoria', 'Fornecedor', 'Ações'],
            dataRows :  ativos
        };
    });
  }

  AdicionarAtivo(){
    this.router.navigate(['/ativos/add']);
  }

  EditarAtivo(ativo: Ativo){
    console.log('Ativo a Editar:', ativo);   
    this.router.navigate(['/ativos/edit'], { state: {ativo: ativo}});
  }

  ExcluirAtivo(ativo: Ativo){
    var id = 1;
    console.log('ativo a deletar', ativo);
    if(confirm("Deletar "+ ativo.nome + "?")) {
      console.log('exclusão confirmada pelo usuário');
      this.ativosService.deleteAtivo(ativo.id);
      var index =this.ativos.map( x=> { return x.id; }).indexOf(id);

      this.ativos.splice(index, 1);

      this.tableData1.dataRows = this.ativos;
      this.showNotification('top','center', 'Ativo Excluído');
    }
    else{
      console.log('exclusão cancelada pelo usuário');
    }
  }

  BuscarAtivo(data: string){
    if (data.trim() != ''){
        this.getAtivosFiltrados(data);
    }
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
