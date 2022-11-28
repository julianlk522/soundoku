import { Component } from '@angular/core';

@Component({
  selector: 'app-selection-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class SelectionGridComponent {
  arr: number[] = [];

  ngOnInit() {
    for (let i = 0; i < 9; i++) {
      this.arr.push(i);
    }
  }
}
