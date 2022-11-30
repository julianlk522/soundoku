import { Component } from '@angular/core';
import { NumberSelectService } from './number-select-service.service';

@Component({
  selector: 'app-selection-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class SelectionGridComponent {
  arr: number[] = [];

  constructor(private numberSelect: NumberSelectService) {}

  ngOnInit() {
    for (let i = 1; i <= 9; i++) {
      this.arr.push(i);
    }
  }

  onReceiveEmitNum(num: number) {
    console.log(num);
    this.numberSelect.emitSelectedNumber(num);
  }
}
