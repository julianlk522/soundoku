import { Component, Input } from '@angular/core';
import { AudioContextService } from 'src/app/services/audio-context.service';
import { NumberSelectService } from 'src/app/services/number-select.service';
import { TimerControlsService } from 'src/app/services/timer-controls.service';

@Component({
  selector: 'app-selection-grid',
  template: `
    <div class="grid">
      <app-selection-button
        *ngFor="let num of arr"
        [num]="num"
        (emitNum)="onReceiveEmitNum($event)"
      ></app-selection-button>
    </div>

    <h3 class="timer">{{ formattedTime }}</h3>
    <h3 class="errors">Errors: {{ errors }}</h3>
  `,
  styleUrls: ['./grid.component.css'],
})
export class SelectionGridComponent {
  arr: number[] = [];
  formattedTime: string = '0: 00';

  constructor(
    private numberSelect: NumberSelectService,
    private audioService: AudioContextService,
    private timerControls: TimerControlsService
  ) {
    this.timerControls.timerData.subscribe(
      (time) => (this.formattedTime = time)
    );
  }

  @Input() errors: number;

  ngOnInit() {
    for (let i = 1; i <= 9; i++) {
      this.arr.push(i);
    }
    this.timerControls.start();
  }

  onReceiveEmitNum(num: number) {
    this.numberSelect.emitSelectedNumber(num);
    this.audioService.stop();
    this.audioService.play(num - 1);
  }
}
