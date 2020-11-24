import { TestBed } from '@angular/core/testing';

import { BarragemService } from './barragem.service';

describe('BarragemService', () => {
  let service: BarragemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarragemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
