import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Barragem } from 'models/barragem';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BarragemService {

  url = environment.baseUrl + 'barragemService';


  constructor(private httpClient: HttpClient) { }
// Headers
httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
}

  getBarragens(): Observable<Barragem[]> {
    return this.httpClient.get<Barragem[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  getBarragensFiltradas(data: string): Observable<Barragem[]> {
    return this.httpClient.get<Barragem[]>(this.url +'/filtro', {params: {'filtro': data}})
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  updateBarragem(barragem: any){
    console.log('barragem', barragem);
    return this.httpClient.put(this.url, barragem, this.httpOptions).subscribe(response=> {
      console.log(response);
    }, this.handleError)
  }

  alertar(msg: string){
    return this.httpClient.post(this.url + '/alertar', {Mensagem: msg}, this.httpOptions).subscribe(response=> {
      console.log(response);
    }, this.handleError)
  }

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
