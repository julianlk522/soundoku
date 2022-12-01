import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-timer',
  // templateUrl: './timer.component.html',
  template: ` <h3>{{ formattedTime }}</h3> `,
  styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnDestroy {
  intervalId = 0;
  seconds = 0;
  formattedTime = this.formatSeconds(this.seconds);

  ngOnInit() {
    this.start();
  }

  ngOnDestroy() {
    this.reset();
  }

  private reset() {
    clearInterval(this.intervalId);
  }

  private start() {
    this.reset();
    this.intervalId = window.setInterval(() => {
      this.seconds++;
      this.formattedTime = this.formatSeconds(this.seconds);
    }, 1000);
  }

  private formatSeconds(totalSeconds: number) {
    const minutes = Math.floor(totalSeconds / 60);
    const remainder = totalSeconds % 60;
    const seconds = remainder < 10 ? '0' + remainder : remainder;

    return `${minutes}: ${seconds}`;
  }
}
