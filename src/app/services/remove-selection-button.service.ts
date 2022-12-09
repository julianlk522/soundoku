import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RemoveSelectionButtonService {
  constructor() {}

  private selectionNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  public get() {
    return this.selectionNumbers;
  }

  public removeButtonEmitter = new EventEmitter<number>();

  public remove(num: number) {
    this.selectionNumbers = this.selectionNumbers.filter((val) => val !== num);
    this.removeButtonEmitter.emit(num);
  }
}
