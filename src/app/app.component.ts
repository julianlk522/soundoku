import { Component } from '@angular/core';
import { TimerControlsService } from './timer-controls.service';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <div
      *ngIf="!gameReset"
      class="mainGameFlexWrapper"
      [ngStyle]="{
        opacity: gameWon ? '0.1' : '1',
        filter: gameWon ? 'blur(8px)' : ''
      }"
    >
      <app-board
        (emitGameOver)="onGameWin()"
        (emitIncorrectGuess)="incrementErrors()"
      ></app-board>
      <app-selection-grid [errors]="errors"></app-selection-grid>
    </div>
    <app-game-over-message
      *ngIf="gameWon"
      class="gameOverMessage"
      [victoryTime]="victoryTime"
      [errors]="errors"
      (emitNewGameRequest)="newGame()"
    ></app-game-over-message>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Soundoku';
  errors = 0;
  gameWon = false;
  gameReset = false;
  victoryTime = '';

  constructor(private timerControls: TimerControlsService) {}

  onGameWin() {
    this.gameWon = true;
    this.victoryTime = this.timerControls.formattedTime;
  }

  newGame() {
    this.gameWon = false;
    this.gameReset = true;
    this.errors = 0;
    setTimeout(() => (this.gameReset = false), 0);
  }

  incrementErrors() {
    this.errors++;
  }
}
