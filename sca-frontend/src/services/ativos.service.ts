import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Ativo } from '../models/ativo';
import { TipoAtivo } from 'models/tipo-ativo';
import { environment } from 'environments/environment';
import { Manutencao } from 'models/manutencao';

@Injectable({
  providedIn: 'root'
})
export class AtivosService {
  

  url = environment.baseUrl + 'ativosService';

  constructor(private httpClient: HttpClient) { }

    // Headers
    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
    }

    getAtivos(): Observable<Ativo[]> {
      return this.httpClient.get<Ativo[]>(this.url)
        .pipe(
          retry(2),
          catchError(this.handleError))
    }

    getAtivosFiltrados(data: string): Observable<Ativo[]> {
      return this.httpClient.get<Ativo[]>(this.url +'/filtro', {params: {'filtro': data}})
        .pipe(
          retry(2),
          catchError(this.handleError))
    }

    getAtivoById(data: number):Observable<Ativo> {
      return this.httpClient.get<Ativo>(this.url +'/' + data.toString())
        .pipe(
          retry(2),
          catchError(this.handleError))
    }

    insertAtivo(ativo: Ativo){
      console.log('ativo', ativo);
      return this.httpClient.post(this.url, ativo, this.httpOptions).subscribe(response=> {
        console.log(response);
      }, this.handleError)
    }

    insertManutencao(ativoId: number, manutencao: Manutencao) {
      console.log('manutencao', manutencao);
      return this.httpClient.post(this.url + '/' + ativoId + '/manutencao', manutencao, this.httpOptions).subscribe(response=> {
        console.log(response);
      }, this.handleError)
    }


    updateAtivo(ativo: Ativo){
      console.log('ativo', ativo);
      return this.httpClient.put(this.url, ativo, this.httpOptions).subscribe(response=> {
        console.log(response);
      }, this.handleError)
    }

    getTipoAtivos(){
      return this.httpClient.get<TipoAtivo[]>(this.url + '/TipoAtivo', this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError))
    }

    deleteAtivo(idAtivo: number){
      return this.httpClient.delete(this.url +'/' + idAtivo).subscribe(response => console.log(response));
        }

      // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
