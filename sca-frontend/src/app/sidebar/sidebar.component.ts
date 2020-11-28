import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    children?: RouteInfo[];
    roles: string[];
}
export const ROUTES: RouteInfo[] = [
    { path: '/ativos', title: 'Ativos',  icon:'pe-7s-box2', class: '', roles: ["admin", "engenheiro", "analista", "consultor"]},
    // children: [
    //   { path: '/ativos/add', title: 'Cadastro de Ativo',  icon:'', class: '' },
    //   { path: '/ativos/edit', title: 'Editar Ativo',  icon:'', class: '' }
    //  ]
    { path: '/workflow', title: 'Workflow de Processos Minerários',  icon:'pe-7s-play', class: '', roles: ["admin", "engenheiro", "analista", "consultor"] },
    { path: '/monitoramentoBarragem', title: 'Monitoramento de Barragens',  icon:'pe-7s-graph2', class: '', roles: ["admin", "engenheiro", "analista", "consultor"]},
    { path: '/seguranca-comunicacao', title: 'Segurança e Comunicação',  icon:'pe-7s-shield', class: '', roles: ["admin", "engenheiro", "analista", "consultor"] },
    { path: '/business-intelligence', title: 'Inteligência de Negócio',  icon:'pe-7s-graph1', class: '',roles: ["admin", "engenheiro", "analista", "consultor"] },
    { path: '/compliance', title: 'Compliance',  icon:'pe-7s-note', class: '', roles: ["admin", "engenheiro", "analista", "consultor"] },
    { path: '/relatorios', title: 'Relatórios',  icon:'pe-7s-display2', class: '', roles: ["admin", "engenheiro", "analista", "consultor"] }
  ];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    let role = localStorage.getItem('userRole')
    this.menuItems = ROUTES.filter(menuItem => menuItem.roles.includes(role));
  }

  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
