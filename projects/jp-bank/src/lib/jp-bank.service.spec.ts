import { TestBed } from '@angular/core/testing';

import { JpBankService } from './jp-bank.service';

describe('JpBankService', () => {
  let service: JpBankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JpBankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
