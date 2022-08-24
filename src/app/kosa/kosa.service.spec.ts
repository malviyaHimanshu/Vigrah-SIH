import { TestBed } from '@angular/core/testing';

import { KosaService } from './kosa.service';

describe('KosaService', () => {
  let service: KosaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KosaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
