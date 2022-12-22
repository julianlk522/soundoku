import { Component, Output, EventEmitter } from '@angular/core';
import { AudioContextService } from '../services/audio-context.service';
import { RemoveSelectionButtonService } from '../services/remove-selection-button.service';
import { GetSudokuService } from '../services/get-sudoku.service';
import { NumberSelectService } from '../services/number-select.service';
import { TimerControlsService } from '../services/timer-controls.service';

@Component({
  selector: 'app-board',
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
  @Output() emitIncorrectGuess = new EventEmitter();

  constructor(
    public sudoku: GetSudokuService,
    private numberSelect: NumberSelectService,
    public audioContext: AudioContextService,
    private timerControls: TimerControlsService,
    private removeSelectionButton: RemoveSelectionButtonService
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
  }

  fillCellsToDecreaseDifficulty() {
    //  check for number of initially filled spaces
    let filledNums = this.start.filter(
      (val: number | null) => val !== null
    ).length;

    //  fill in random cells until filledNums = 50
    //  default difficulty makes this game really hard lol

    let n = 50 - filledNums;
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
      this.audioContext.play(value - 1, overallIndex);
    }
  }

  checkIfCorrectNumAtCell(num: number) {
    if (this.selectedCell !== null && this.board[this.selectedCell] === null) {
      if (this.solution[this.selectedCell] === num) {
        return this.handleCorrectGuess();
      }
      this.emitIncorrectGuess.emit();
    }
  }

  handleCorrectGuess() {
    if (this.selectedCell === null) return;
    this.board.splice(this.selectedCell, 1, this.solution[this.selectedCell]);
    this.setRows();

    //  possibly remove selection button if there are no remaining cells of a certain number
    const selectionNumber = this.board[this.selectedCell];
    if (selectionNumber === null) return;

    let count: number = 0;
    this.board.forEach((cell, i) => {
      if (cell === selectionNumber) count++;
    });

    if (count === 9) this.removeSelectionButton.remove(selectionNumber);

    //  if no null values left then stop timer and end game
    if (!this.board.filter((val: number | null) => val === null).length) {
      this.timerControls.reset();
      this.emitGameOver.emit();
    }
  }
}
