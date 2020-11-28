import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutencaoAgendamentoComponent } from './manutencao-agendamento.component';

describe('ManutencaoAgendamentoComponent', () => {
  let component: ManutencaoAgendamentoComponent;
  let fixture: ComponentFixture<ManutencaoAgendamentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManutencaoAgendamentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManutencaoAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
