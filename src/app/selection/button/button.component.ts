import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-selection-button',
  // templateUrl: './button.component.html',
  template: `<div class="selectionButton" (click)="onClick()">
    <p>
      {{ num }}
    </p>
  </div>`,
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
