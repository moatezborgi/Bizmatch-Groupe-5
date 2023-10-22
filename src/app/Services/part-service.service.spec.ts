import { TestBed } from '@angular/core/testing';

import { PartServiceService } from './part-service.service';

describe('PartServiceService', () => {
  let service: PartServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
