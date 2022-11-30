import { Component } from '@angular/core';
import { AudioContextService } from 'src/app/audio-context.service';
import { NumberSelectService } from 'src/app/number-select.service';

@Component({
  selector: 'app-selection-grid',
  templateUrl: './grid.component.html',
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
    console.log(num);
    this.numberSelect.emitSelectedNumber(num);
    this.audioService.play(num - 1);
  }
}
