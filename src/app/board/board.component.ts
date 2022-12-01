import { Component, Output, EventEmitter } from '@angular/core';
import { AudioContextService } from '../audio-context.service';
import { GetSudokuService } from '../get-sudoku.service';
import { NumberSelectService } from '../number-select.service';
import { TimerControlsService } from '../timer-controls.service';

@Component({
  selector: 'app-board',
  // templateUrl: './board.component.html',
  template: `
    <app-board-row
      *ngFor="let row of rows; index as index"
      [startingBoard]="start"
      [row]="row"
      [rowIndex]="index"
      [selectedCell]="selectedCell"
      (newCellSelected)="handleCellSelected($event)"
    ></app-board-row>
  `,
  styleUrls: ['./board.component.css'],
})
export class BoardComponent {
  start: (number | null)[] = [];
  board: (number | null)[] = [];
  solution: number[] = [];
  rows: (number | null)[][] = [];
  selectedCell: number | null = null;

  @Output() emitGameOver = new EventEmitter();

  constructor(
    private sudoku: GetSudokuService,
    private numberSelect: NumberSelectService,
    private audioContext: AudioContextService,
    private timerControls: TimerControlsService
  ) {}

  ngOnInit(): void {
    this.numberSelect.selectedNumberEmitter.subscribe((num) => {
      this.checkIfCorrectNumAtCell(num);
    });

    this.start = this.sudoku.makePuzzle();

    //  getSolution() method relies on a range of 0-8 so must be called before mapping values to 1-9
    this.solution = this.sudoku
      .getSolution(this.start)
      .map((num: number) => num + 1);

    this.start = this.start.map((num: number | null) =>
      num !== null ? num + 1 : null
    );

    this.fillCellsToDecreaseDifficulty();

    this.board = [...this.start];
    this.setRows();

    console.log(this.board);
    console.log(this.solution);
  }

  fillCellsToDecreaseDifficulty() {
    //  check for number of initially filled spaces
    let filledNums = this.start.filter(
      (val: number | null) => val !== null
    ).length;

    //  fill in random cells until filledNums = 40
    //  default difficulty makes this game really hard lol

    let n = 79 - filledNums;
    const checkedIndices = [];

    while (n > 0) {
      const randomIndex = Math.floor(Math.random() * 81);
      if (
        checkedIndices.indexOf(randomIndex) === -1 &&
        this.start[randomIndex] === null
      ) {
        this.start.splice(randomIndex, 1, this.solution[randomIndex]);
        n--;
      }
      checkedIndices.push(randomIndex);
    }
  }

  setRows() {
    //  split board into groups of 9 and assign product to rows
    this.rows = [];
    for (let r = 0; r < 9; r++) {
      this.rows.push(this.board.slice(r * 9, r * 9 + 9));
    }
  }

  handleCellSelected({
    overallIndex,
    value,
  }: {
    overallIndex: number;
    value: number | boolean;
  }) {
    this.selectedCell = overallIndex;
    if (typeof value === 'number') {
      this.audioContext.stop();
      this.audioContext.play(value - 1);
    }
  }

  checkIfCorrectNumAtCell(num: number) {
    if (this.selectedCell !== null && this.board[this.selectedCell] === null) {
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

    //  if no null values left stop timer and do other game over stuff
    if (!this.board.filter((val: number | null) => val === null).length) {
      this.timerControls.reset();
      this.emitGameOver.emit();
    }
  }
}
