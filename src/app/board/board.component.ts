import { Component, OnInit } from '@angular/core';
import { GetSudokuService } from '../get-sudoku.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent {
  board: number[] = [];
  rows: number[][] = [];

  constructor(private sudoku: GetSudokuService) {}

  ngOnInit(): void {
    this.board = this.sudoku.makePuzzle();
    console.log(this.board);

    //  check for number of filled in spaces (not important, just testing difficulty)
    let filledNums = 0;

    for (let i = 0; i < this.board.length; i++) {
      if (this.board[i] !== null) {
        filledNums++;
      }
    }
    console.log(filledNums);

    //  split board into groups of 9 and assign product to rows
    for (let r = 0; r < 9; r++) {
      this.rows.push(this.board.slice(r * 9, r * 9 + 9));
    }
    console.log(this.rows);
  }
}
