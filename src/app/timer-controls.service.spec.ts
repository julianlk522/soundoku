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

  it('should reset the count after calling start()', () => {
    spyOn(service, 'reset');
    service.start();
    expect(service.reset).toHaveBeenCalled();
    expect(service.seconds).toBe(0);
  });

  it('formatSeconds should correctly format number seconds into a readable string', () => {
    spyOnAllFunctions(service);
    expect(service.formatSeconds(0)).toBe('0: 00');
    expect(service.formatSeconds(10)).toBe('0: 10');
    expect(service.formatSeconds(100)).toBe('1: 40');

    //  not sure yet why this doesnt work
    // spyOn(service, 'formatSeconds');
    // expect(service.formatSeconds(20)).toBe('0: 20');
  });
});
