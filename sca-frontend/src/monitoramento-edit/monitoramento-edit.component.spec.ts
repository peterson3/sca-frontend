import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoramentoEditComponent } from './monitoramento-edit.component';

describe('MonitoramentoEditComponent', () => {
  let component: MonitoramentoEditComponent;
  let fixture: ComponentFixture<MonitoramentoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitoramentoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoramentoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
