import { TestBed } from '@angular/core/testing';

import { NormalUserServicesService } from './normal-user-services.service';

describe('NormalUserServicesService', () => {
  let service: NormalUserServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NormalUserServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
