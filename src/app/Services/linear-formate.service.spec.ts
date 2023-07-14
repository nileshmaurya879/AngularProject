import { TestBed } from '@angular/core/testing';

import { LinearFormateService } from './linear-formate.service';

describe('LinearFormateService', () => {
  let service: LinearFormateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinearFormateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
