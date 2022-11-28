import { Component, OnInit } from '@angular/core';
import { GetSudokuService } from '../get-sudoku.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent {
  board = [];

  constructor(private sudoku: GetSudokuService) {}

  ngOnInit(): void {
    this.board = this.sudoku.makePuzzle();
    console.log(this.board);

    let filledNums = 0;

    for (let i = 0; i < this.board.length; i++) {
      if (this.board[i] !== null) {
        filledNums++;
      }
    }
    console.log(filledNums);
  }
}
