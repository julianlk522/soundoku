import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-board-row-cell',
  templateUrl: './board-row-cell.component.html',
  styleUrls: ['./board-row-cell.component.css'],
})
export class BoardRowCellComponent {
  @Input() value: number;
  @Input() index: number;
}
