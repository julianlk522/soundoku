import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-game-over-message',
  // templateUrl: './game-over-message.component.html',
  template: `
    <div>
      <h2>Congratulations, you won!</h2>
      <br />
      <h3>
        Your time was: <span class="victoryTime">{{ victoryTime }}</span>
      </h3>
    </div>
  `,
  styleUrls: ['./game-over-message.component.css'],
})
export class GameOverMessageComponent {
  @Input() victoryTime: string;
}
