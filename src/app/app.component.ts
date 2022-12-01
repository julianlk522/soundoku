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
        opacity: gameWon ? '0.2' : '1',
        filter: gameWon ? 'blur(4px)' : ''
      }"
    >
      <app-board (emitGameOver)="onGameWin()"></app-board>
      <app-selection-grid></app-selection-grid>
    </div>
    <app-game-over-message
      *ngIf="gameWon"
      class="gameOverMessage"
      [victoryTime]="victoryTime"
      (emitNewGameRequest)="newGame()"
    ></app-game-over-message>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Soundoku';
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
    setTimeout(() => (this.gameReset = false), 0);
  }
}
