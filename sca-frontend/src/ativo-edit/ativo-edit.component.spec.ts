import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtivoEditComponent } from './ativo-edit.component';

describe('AtivoEditComponent', () => {
  let component: AtivoEditComponent;
  let fixture: ComponentFixture<AtivoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtivoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtivoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
