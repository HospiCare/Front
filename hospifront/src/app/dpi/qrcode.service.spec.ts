import { TestBed } from '@angular/core/testing';

import { QRCodeService } from './qrcode.service';

describe('QrcodeService', () => {
  let service: QRCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QRCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
