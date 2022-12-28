import { TestBed } from '@angular/core/testing';

import { RemainingCellsService } from './remaining-cells.service';

describe('RemainingCellsService', () => {
  let service: RemainingCellsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemainingCellsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
