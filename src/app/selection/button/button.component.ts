import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RemoveSelectionButtonService } from 'src/app/services/remove-selection-button.service';

@Component({
  selector: 'app-selection-button',
  template: `<div
    [ngStyle]="{ visibility: getFinished() ? 'hidden' : 'visible' }"
    class="selectionButton button"
    (click)="onClick()"
  >
    <p>
      {{ num }}
    </p>
  </div>`,
  styleUrls: ['./button.component.css'],
})
export class SelectionButtonComponent {
  private finished: boolean;

  getFinished() {
    return this.finished;
  }

  setFinished() {
    this.finished = true;
  }

  @Input() num: number;
  @Output() emitNum = new EventEmitter<number>();

  constructor(private removeSelection: RemoveSelectionButtonService) {}

  ngOnInit() {
    this.removeSelection.removeButtonEmitter.subscribe((num) => {
      if (this.num === num) this.setFinished();
    });
  }

  onClick() {
    this.emitNum.emit(this.num);
  }
}
