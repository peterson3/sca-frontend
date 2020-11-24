export interface Ativo {
    Id? : number;
    Nome : string;
    Modelo : string;
    Identificador : string;
    DataCompra : Date;
    DataCadastro? : Date;
    DataUltimaManutencao : Date; 
    Categoria : string;
    Fornecedor :string;
    tipoId?: number;
}
