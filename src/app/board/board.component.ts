import { Component, OnInit } from '@angular/core';
import { GetSudokuService } from '../get-sudoku.service';
import { NumberSelectService } from '../number-select.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
})
export class BoardComponent {
  board: (number | null)[] = [];
  solution: number[] = [];
  rows: (number | null)[][] = [];
  selectedCell: number | null = null;

  constructor(
    private sudoku: GetSudokuService,
    private numberSelect: NumberSelectService
  ) {}

  ngOnInit(): void {
    this.numberSelect.selectedNumberEmitter.subscribe((num) => {
      this.checkIfCorrectNumAtCell(num);
    });
    this.board = this.sudoku.makePuzzle();

    this.solution = this.sudoku
      .getSolution(this.board)
      .map((num: number) => num + 1);

    this.board = this.board.map((num: number | null) =>
      num !== null ? num + 1 : null
    );

    console.log(this.board);
    console.log(this.solution);

    //  check for number of filled in spaces (not important, just testing difficulty)
    let filledNums = 0;

    for (let i = 0; i < this.board.length; i++) {
      if (this.board[i] !== null) {
        filledNums++;
      }
    }
    console.log(filledNums);

    this.setRows();
  }

  setRows() {
    //  split board into groups of 9 and assign product to rows
    this.rows = [];
    for (let r = 0; r < 9; r++) {
      this.rows.push(this.board.slice(r * 9, r * 9 + 9));
    }
  }

  handleCellSelected(cellIndex: number) {
    this.selectedCell = cellIndex;
  }

  checkIfCorrectNumAtCell(num: number) {
    if (this.selectedCell !== null) {
      if (this.solution[this.selectedCell] === num) {
        console.log('correct!');
        return this.handleCorrectGuess();
      }
      return console.log('false...');
    }
  }

  handleCorrectGuess() {
    if (this.selectedCell === null) return;
    this.board.splice(this.selectedCell, 1, this.solution[this.selectedCell]);
    this.setRows();
  }
}
