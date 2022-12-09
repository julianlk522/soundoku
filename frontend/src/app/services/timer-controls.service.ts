import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TimerControlsService {
  private intervalId = 0;
  public seconds = 0;
  formattedTime = this.formatSeconds(this.seconds);

  private timerSource = new Subject<string>();
  public timerData = this.timerSource.asObservable();

  reset() {
    clearInterval(this.intervalId);
  }

  start() {
    this.reset();
    this.seconds = 0;
    this.intervalId = window.setInterval(() => {
      this.seconds++;
      this.formattedTime = this.formatSeconds(this.seconds);
      this.timerSource.next(this.formattedTime);
    }, 1000);
  }

  formatSeconds(totalSeconds: number) {
    const minutes = Math.floor(totalSeconds / 60);
    const remainder = totalSeconds % 60;
    const seconds = remainder < 10 ? '0' + remainder : remainder;

    return `${minutes}: ${seconds}`;
  }
}
