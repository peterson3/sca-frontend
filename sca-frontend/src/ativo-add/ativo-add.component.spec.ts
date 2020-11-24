import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtivoAddComponent } from './ativo-add.component';

describe('AtivoAddComponent', () => {
  let component: AtivoAddComponent;
  let fixture: ComponentFixture<AtivoAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtivoAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtivoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
