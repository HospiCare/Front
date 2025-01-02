import { TestBed } from '@angular/core/testing';

import { LoginRoutingService } from './login-routing.service';

describe('LoginRoutingService', () => {
  let service: LoginRoutingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginRoutingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
