import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { sha256 } from 'js-sha256';

declare var $:any;


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  url = 'https://localhost:44375/usuario/login';

  constructor(private router: Router, private httpClient: HttpClient) { }

  ngOnInit(): void {
  }


     // Headers
     httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
    }

    login(username, password) {
      return this.httpClient.post<any>(this.url, {Username : username, Password : password}).subscribe(response => {
          console.log(response);
        if (response.token != null && response.token!= undefined){
          localStorage.setItem('userToken',  response.token);
          this.router.navigate(['/ativos']);
        }
        else{
          this.showNotification('top','center');
        }
          
      })
    }

  showNotification(from, align){
      $.notify({
          icon: "pe-7s-gift",
          message: "Usuário ou Senha Inválido."
      },{
          type: 'danger',
          timer: 500,
          placement: {
              from: from,
              align: align
          }
      });
  }

      // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  OnSubmit(username, password){
    this.login(username,password);
  }

}
