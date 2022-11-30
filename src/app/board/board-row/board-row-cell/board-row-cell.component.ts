import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-board-row-cell',
  templateUrl: './board-row-cell.component.html',
  styleUrls: ['./board-row-cell.component.css'],
})
export class BoardRowCellComponent {
  @Input() value: number | null;
  @Input() rowIndex: number;
  @Input() indexInLocalRow: number;
  @Input() selectedCell: number | null;

  @Output() emitSelected = new EventEmitter<number>();

  toggleCellSelected() {
    const overallCellIndex: number | null =
      this.rowIndex * 9 + this.indexInLocalRow;
    this.emitSelected.emit(overallCellIndex);
  }
}
