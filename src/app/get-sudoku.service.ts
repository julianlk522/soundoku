import { Injectable } from '@angular/core';
import { makepuzzle, solvepuzzle } from 'sudoku';

@Injectable({
  providedIn: 'root',
})
export class GetSudokuService {
  constructor() {}

  makePuzzle() {
    return makepuzzle() as (number | null)[];
  }

  getSolution(board: (number | null)[]) {
    return solvepuzzle(board);
  }
}
