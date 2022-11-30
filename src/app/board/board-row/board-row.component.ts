import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-board-row',
  templateUrl: './board-row.component.html',
  styleUrls: ['./board-row.component.css'],
})
export class BoardRowComponent {
  @Input() row: (number | null)[];
  @Input() rowIndex: number;
  @Input() selectedCell: number | null;

  @Output() newCellSelected = new EventEmitter();

  handleCellSelect(cellIndex: number) {
    this.newCellSelected.emit(cellIndex);
  }
}
