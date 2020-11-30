import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public auth: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token = this.auth.getToken();
    console.log('Token', token);
    if (token != null){
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer  ${token}` 
        }
      });
    }
    
    console.log('request', request);
    return next.handle(request);
  }
}
