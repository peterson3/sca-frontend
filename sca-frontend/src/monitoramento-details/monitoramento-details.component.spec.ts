import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoramentoDetailsComponent } from './monitoramento-details.component';

describe('MonitoramentoDetailsComponent', () => {
  let component: MonitoramentoDetailsComponent;
  let fixture: ComponentFixture<MonitoramentoDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitoramentoDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoramentoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
