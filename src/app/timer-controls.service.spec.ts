import { TestBed } from '@angular/core/testing';

import { TimerControlsService } from './timer-controls.service';

describe('TimerControlsService', () => {
  let service: TimerControlsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimerControlsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
