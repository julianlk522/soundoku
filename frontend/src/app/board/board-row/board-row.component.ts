import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-board-row',
  template: `
    <div
      class="row"
      [ngStyle]="{
        borderBottom: rowIndex === 2 || rowIndex === 5 ? '4px solid black' : ''
      }"
    >
      <app-board-row-cell
        *ngFor="let value of row; index as i"
        class="cell"
        [changed]="value !== startingBoard[rowIndex * 9 + i]"
        [value]="value"
        [rowIndex]="rowIndex"
        [indexInLocalRow]="i"
        [selectedCell]="selectedCell"
        (emitSelected)="handleCellSelect($event)"
      ></app-board-row-cell>
    </div>
  `,
  styleUrls: ['./board-row.component.css'],
})
export class BoardRowComponent {
  @Input() startingBoard: (number | null)[];
  @Input() row: (number | null)[];
  @Input() rowIndex: number;
  @Input() selectedCell: number | null;

  @Output() newCellSelected = new EventEmitter();

  handleCellSelect({
    overallIndex,
    value,
  }: {
    overallIndex: number;
    value: number | boolean;
  }) {
    this.newCellSelected.emit({ overallIndex, value });
  }
}
