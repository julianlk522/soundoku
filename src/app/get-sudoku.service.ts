import { Injectable } from '@angular/core';
import { makepuzzle } from 'sudoku';

@Injectable({
  providedIn: 'root',
})
export class GetSudokuService {
  constructor() {}

  makePuzzle() {
    return makepuzzle();
  }
}
