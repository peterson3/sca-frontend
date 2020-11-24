import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegurancaComunicacaoComponent } from './seguranca-comunicacao.component';

describe('SegurancaComunicacaoComponent', () => {
  let component: SegurancaComunicacaoComponent;
  let fixture: ComponentFixture<SegurancaComunicacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegurancaComunicacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegurancaComunicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
