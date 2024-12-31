import { TestBed } from '@angular/core/testing';

import { VCService } from './vc.service';

describe('VCService', () => {
  let service: VCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
