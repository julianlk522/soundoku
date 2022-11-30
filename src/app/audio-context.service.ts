import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AudioContextService {
  public notes = [
    {
      name: 'C',
      frequency: 261.63,
    },
    {
      name: 'C#',
      frequency: 277.18,
    },
    {
      name: 'D',
      frequency: 293.66,
    },
    {
      name: 'Eb',
      frequency: 311.13,
    },
    {
      name: 'E',
      frequency: 329.63,
    },
    {
      name: 'F',
      frequency: 349.23,
    },
    {
      name: 'F#',
      frequency: 369.99,
    },
    {
      name: 'G',
      frequency: 392,
    },
    {
      name: 'Ab',
      frequency: 415.3,
    },
  ];
  private audioCtx = new AudioContext();
  private gainNode = this.audioCtx.createGain();

  attackTime = 0.25;
  decayTime = 0.25;
  sustainLevel = 0.75;
  releaseTime = 0.25;

  play(index: number) {
    const oscillator = this.audioCtx.createOscillator();
    oscillator.type = 'sine';

    const now = this.audioCtx.currentTime;

    this.gainNode.gain.setValueAtTime(0, 0);
    this.gainNode.gain.linearRampToValueAtTime(1, now + this.attackTime);
    this.gainNode.gain.linearRampToValueAtTime(
      this.sustainLevel,
      now + this.attackTime + this.decayTime
    );
    this.gainNode.gain.setValueAtTime(
      this.sustainLevel,
      now + 1 - this.releaseTime
    );
    this.gainNode.gain.linearRampToValueAtTime(0, now + 1);

    oscillator.connect(this.gainNode);
    this.gainNode.connect(this.audioCtx.destination);
    oscillator.frequency.value = this.notes[index].frequency;
    oscillator.start(now);
    oscillator.stop(now + 1);
  }
}
