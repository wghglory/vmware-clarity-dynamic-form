import { TestBed } from '@angular/core/testing';

import { FormNormalService } from './form-normal.service';

describe('FormNormalService', () => {
  let service: FormNormalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormNormalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
