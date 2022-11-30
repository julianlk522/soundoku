import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-board-row',
  templateUrl: './board-row.component.html',
  styleUrls: ['./board-row.component.css'],
})
export class BoardRowComponent {
  @Input() row: number[];
  @Input() rowIndex: number;
  @Input() selectedCell: number | null;

  @Output() newCellSelected = new EventEmitter();

  handleCellSelect(cellIndex: number) {
    console.log(
      `toggled index ${cellIndex} in row ${this.rowIndex} (board-row)`
    );
    const overallCellIndex: number = this.rowIndex * 9 + cellIndex;
    this.newCellSelected.emit(overallCellIndex);
  }
}
