import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NumberSelectService {
  selectedNumberEmitter = new EventEmitter<number>();

  emitSelectedNumber(num: number) {
    this.selectedNumberEmitter.emit(num);
  }
}
