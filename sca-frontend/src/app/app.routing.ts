import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SignInComponent } from 'sign-in/sign-in.component';
import { AuthGuard } from 'auth.guard';

const routes: Routes =[
  {
    path: '',
    component: SignInComponent,
    pathMatch: 'full'
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }],
    canActivate:[AuthGuard]
}
,{
    path: '**',
    redirectTo: 'dashboard',
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
