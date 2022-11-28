import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-selection-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class SelectionButtonComponent {
  @Input() num: number;

  constructor() {}
}
