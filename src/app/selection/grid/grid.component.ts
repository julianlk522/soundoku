import { Component } from '@angular/core';
import { AudioContextService } from 'src/app/audio-context.service';
import { NumberSelectService } from 'src/app/number-select.service';

@Component({
  selector: 'app-selection-grid',
  // templateUrl: './grid.component.html',
  template: `
    <div class="grid">
      <app-selection-button
        *ngFor="let num of arr"
        [num]="num"
        (emitNum)="onReceiveEmitNum($event)"
      ></app-selection-button>
    </div>

    <app-timer></app-timer>
  `,
  styleUrls: ['./grid.component.css'],
})
export class SelectionGridComponent {
  arr: number[] = [];

  constructor(
    private numberSelect: NumberSelectService,
    private audioService: AudioContextService
  ) {}

  ngOnInit() {
    for (let i = 1; i <= 9; i++) {
      this.arr.push(i);
    }
  }

  onReceiveEmitNum(num: number) {
    this.numberSelect.emitSelectedNumber(num);
    this.audioService.stop();
    this.audioService.play(num - 1);
  }
}
