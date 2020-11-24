export interface Ativo {
    id? : number;
    nome : string;
    modelo : string;
    identificador : string;
    dataCompra : Date;
    dataCadastro? : Date;
    dataUltimaManutencao : Date; 
    categoria : string;
    fornecedor :string;
    tipoId?: number;
}
