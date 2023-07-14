import { TestBed } from '@angular/core/testing';

import { CustomerSeviceService } from './customer-sevice.service';

describe('CustomerSeviceService', () => {
  let service: CustomerSeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerSeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
