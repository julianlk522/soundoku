import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-board-row-cell',
  // templateUrl: './board-row-cell.component.html',
  template: `
    <div
      class="cell"
      [ngStyle]="{
        background: changed
          ? 'rgba(0, 255, 0, 0.5)'
          : selectedCell === rowIndex * 9 + indexInLocalRow
          ? 'rgba(0, 0, 255, 0.75)'
          : value !== null
          ? 'rgba(0, 0, 255, 0.5)'
          : '',
        borderRight:
          indexInLocalRow === 2 || indexInLocalRow === 5
            ? '4px solid black'
            : ''
      }"
      (click)="toggleCellSelected()"
    ></div>
  `,
  styleUrls: ['./board-row-cell.component.css'],
})
export class BoardRowCellComponent {
  @Input() value: number | null;
  @Input() changed: boolean;
  @Input() rowIndex: number;
  @Input() indexInLocalRow: number;
  @Input() selectedCell: number | null;

  @Output() emitSelected = new EventEmitter<{
    overallIndex: number;
    value: number | boolean;
  }>();

  toggleCellSelected() {
    const overallIndex: number | null =
      this.rowIndex * 9 + this.indexInLocalRow;
    if (this.value !== null) {
      this.emitSelected.emit({ overallIndex, value: this.value });
    } else {
      this.emitSelected.emit({ overallIndex, value: false });
    }
  }
}
