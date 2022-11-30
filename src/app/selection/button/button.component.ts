import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-selection-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class SelectionButtonComponent {
  @Input() num: number;
  @Output() emitNum = new EventEmitter<number>();

  constructor() {}

  onClick() {
    this.emitNum.emit(this.num);
  }
}
