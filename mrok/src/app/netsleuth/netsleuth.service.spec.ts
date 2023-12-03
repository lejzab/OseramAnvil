import { TestBed } from '@angular/core/testing';

import { NetsleuthService } from './netsleuth.service';

describe('NetsleuthService', () => {
  let service: NetsleuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetsleuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
