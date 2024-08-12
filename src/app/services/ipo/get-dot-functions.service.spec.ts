import { TestBed } from '@angular/core/testing';

import { GetDotFunctionsService } from './get-dot-functions.service';

describe('GetDotFunctionsService', () => {
  let service: GetDotFunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDotFunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
