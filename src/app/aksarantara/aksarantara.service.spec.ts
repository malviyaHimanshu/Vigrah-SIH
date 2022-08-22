import { TestBed } from '@angular/core/testing';

import { AksarantaraService } from './aksarantara.service';

describe('AksarantaraService', () => {
  let service: AksarantaraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AksarantaraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
