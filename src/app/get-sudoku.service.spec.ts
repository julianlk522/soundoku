import { TestBed } from '@angular/core/testing';

import { GetSudokuService } from './get-sudoku.service';

describe('GetSudokuService', () => {
  let service: GetSudokuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSudokuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
