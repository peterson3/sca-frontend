import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwIfEmpty } from 'rxjs/operators';

declare interface RouteInfo {
  path: string;
  roles: string[];
}
export const ROUTES: RouteInfo[] = [
  { path: '/ativos', roles: ["admin", "engenheiro", "analista", "consultor"]},
  { path: '/workflow', roles: ["admin", "engenheiro", "analista", "consultor"] },
  { path: '/monitoramentoBarragem', roles: ["admin", "engenheiro", "analista", "consultor"]},
  { path: '/seguranca-comunicacao', roles: ["admin", "engenheiro", "analista", "consultor"] },
  { path: '/business-intelligence', roles: ["admin", "engenheiro", "analista", "consultor"] },
  { path: '/compliance', roles: ["admin", "engenheiro", "analista", "consultor"] },
  { path: '/relatorios', roles: ["admin", "engenheiro", "analista", "consultor"] }
];

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private router: Router, private httpClient: HttpClient){}
  
  canActivate(next: ActivatedRouteSnapshot,  state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    var role = localStorage.getItem('userRole');
    var token = localStorage.getItem('userToken');

    let menuPermitidos  = ROUTES.filter(menuItem => menuItem.roles.includes(role));

    if (role){
      console.log("Usuario tentando acessar rota:", state.url, role);
      let urlEstaPermissionada = menuPermitidos.filter(menu=> menu.path.includes(state.url)).length > 0;
      console.log("A url está permissionada ? ", urlEstaPermissionada)
      if (urlEstaPermissionada)
        return true;
      else
        return false;
    } 
    if ( token!= null)
        return true;
        this.router.navigate(['/']);
        return false;
  }
  
}
