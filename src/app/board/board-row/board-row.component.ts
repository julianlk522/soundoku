import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-board-row',
  templateUrl: './board-row.component.html',
  styleUrls: ['./board-row.component.css'],
})
export class BoardRowComponent {
  @Input() row: number[];
  @Input() index: number;
}
