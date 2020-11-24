import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthGuard } from 'auth.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { SignInComponent } from 'sign-in/sign-in.component';
import { AtivoAddComponent } from 'ativo-add/ativo-add.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { AtivoEditComponent } from 'ativo-edit/ativo-edit.component';
import { MonitoramentoComponent } from 'monitoramento/monitoramento.component';
import { MonitoramentoDetailsComponent } from 'monitoramento-details/monitoramento-details.component';
import { MonitoramentoEditComponent } from 'monitoramento-edit/monitoramento-edit.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule
    
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    SignInComponent,
    AtivoAddComponent,
    AtivoEditComponent,
    MonitoramentoComponent,
    MonitoramentoDetailsComponent,
    MonitoramentoEditComponent
  ],
  providers: [AuthGuard, {provide: MAT_DATE_LOCALE, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
