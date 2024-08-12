import { TestBed } from '@angular/core/testing';

import { GetDotFunctionService } from './get-dot-function.service';

describe('GetDotFunctionService', () => {
  let service: GetDotFunctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDotFunctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
