import { TestBed } from '@angular/core/testing';

import { RemoveSelectionButtonService } from './remove-selection-button.service';

describe('RemoveSelectionButtonService', () => {
  let service: RemoveSelectionButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemoveSelectionButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
