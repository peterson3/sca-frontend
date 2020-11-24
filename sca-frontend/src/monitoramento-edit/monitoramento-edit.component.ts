import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Barragem } from 'models/barragem';

@Component({
  selector: 'app-monitoramento-edit',
  templateUrl: './monitoramento-edit.component.html',
  styleUrls: ['./monitoramento-edit.component.css']
})
export class MonitoramentoEditComponent implements OnInit {
  private barragem: Barragem;

  constructor(private router: Router) {
    this.barragem = this.router.getCurrentNavigation().extras.state.barragem;

   }

  ngOnInit(): void {
  }

}
