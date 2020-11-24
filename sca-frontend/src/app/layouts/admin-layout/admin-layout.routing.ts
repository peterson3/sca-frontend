import { Routes } from '@angular/router';

import { AtivosComponent } from '../../ativos/ativos.component';
import { AtivoAddComponent } from 'ativo-add/ativo-add.component';
import { SignInComponent } from 'sign-in/sign-in.component';
import { WorkflowComponent } from 'workflow/workflow.component';
import { MonitoramentoComponent } from 'monitoramento/monitoramento.component';
import { SegurancaComunicacaoComponent } from 'seguranca-comunicacao/seguranca-comunicacao.component';
import { BusinessIntelligenceComponent } from 'business-intelligence/business-intelligence.component';
import { ComplianceComponent } from 'compliance/compliance.component';
import { RelatoriosComponent } from 'relatorios/relatorios.component';
import { AtivoEditComponent } from 'ativo-edit/ativo-edit.component';
import { MonitoramentoDetailsComponent } from 'monitoramento-details/monitoramento-details.component';
import { MonitoramentoEditComponent } from 'monitoramento-edit/monitoramento-edit.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'ativos',          component: AtivosComponent},
    { path: 'ativos/add',      component: AtivoAddComponent }, 
    { path: 'ativos/edit',      component: AtivoEditComponent }, 
    { path: 'signin',         component: SignInComponent },
    { path: 'workflow',         component: WorkflowComponent },
    { path: 'monitoramentoBarragem',   component: MonitoramentoComponent},
    { path: 'monitoramentoBarragem/details',   component: MonitoramentoDetailsComponent},
    { path: 'monitoramentoBarragem/edit',   component:MonitoramentoEditComponent},
    { path: 'seguranca-comunicacao', component: SegurancaComunicacaoComponent},
    { path: 'business-intelligence', component: BusinessIntelligenceComponent},
    { path: 'compliance', component: ComplianceComponent},
    { path: 'relatorios', component: RelatoriosComponent}
];
