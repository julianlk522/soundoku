import { Component, OnInit } from '@angular/core';
import { GetSudokuService } from '../get-sudoku.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent {
  grid = [];

  constructor(private sudoku: GetSudokuService) {}

  ngOnInit(): void {
    this.grid = this.sudoku.makePuzzle();
    console.log(this.grid);

    let filledNums = 0;

    for (let i = 0; i < this.grid.length; i++) {
      if (this.grid[i] !== null) {
        filledNums++;
      }
    }
    console.log(filledNums);
  }
}
