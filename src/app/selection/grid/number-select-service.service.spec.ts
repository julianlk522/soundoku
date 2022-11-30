import { TestBed } from '@angular/core/testing';

import { NumberSelectService } from './number-select-service.service';

describe('NumberSelectServiceService', () => {
  let service: NumberSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
