import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-board-row-cell',
  template: `
    <div
      class="cell"
      [ngStyle]="{
        backgroundColor: changed
          ? 'var(--color-secondary)'
          : selectedCell === rowIndex * 9 + indexInLocalRow
          ? 'var(--color-primary)'
          : value !== null
          ? 'var(--color-primary-soft)'
          : '',
        borderRight:
          indexInLocalRow === 2 || indexInLocalRow === 5
            ? '4px solid black'
            : ''
      }"
      (click)="toggleCellSelected()"
    >
      {{ changed ? value : '' }}
    </div>
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
