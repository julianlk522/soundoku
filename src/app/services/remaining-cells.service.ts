import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RemainingCellsService {
  remainingCellsEmitter = new EventEmitter<number>();

  emitRemainingCells(num: number) {
    this.remainingCellsEmitter.emit(num);
  }
}
