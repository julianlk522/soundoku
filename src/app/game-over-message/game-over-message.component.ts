import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-over-message',
  // templateUrl: './game-over-message.component.html',
  template: `
    <div>
      <h2 style="fontSize: 4rem">Congratulations, you won!</h2>
      <h3 class="flexOnEm">💪</h3>
      <h3>
        Your time was: <span class="victoryTime">{{ victoryTime }}</span>
      </h3>
      <p>(with {{ errors }} errors)</p>
      <br />
      <button (click)="requestNewGame()">Play Again?</button>
    </div>
  `,
  styleUrls: ['./game-over-message.component.css'],
})
export class GameOverMessageComponent {
  @Input() victoryTime: string;
  @Input() errors: number;
  @Output() emitNewGameRequest = new EventEmitter();

  requestNewGame() {
    this.emitNewGameRequest.emit();
  }
}
