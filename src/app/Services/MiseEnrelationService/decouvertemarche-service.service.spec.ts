import { TestBed } from '@angular/core/testing';

import { DecouvertemarcheServiceService } from './decouvertemarche-service.service';

describe('DecouvertemarcheServiceService', () => {
  let service: DecouvertemarcheServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DecouvertemarcheServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
