import { TestBed } from '@angular/core/testing';

import { GetPersonalPFService } from './get-personal-pf.service';

describe('GetPersonalPFService', () => {
  let service: GetPersonalPFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPersonalPFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
