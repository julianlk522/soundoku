import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AudioContextService {
  private notes = [
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
  private audioCtx: AudioContext;

  private attackTime = 0.25;
  private decayTime = 0.25;
  private sustainLevel = 0.75;
  private releaseTime = 0.25;

  play(index: number) {
    this.audioCtx = new AudioContext();
    const gainNode = this.audioCtx.createGain();
    const oscillator = this.audioCtx.createOscillator();
    oscillator.type = 'sine';

    const now = this.audioCtx.currentTime;

    gainNode.gain.setValueAtTime(0, 0);
    gainNode.gain.linearRampToValueAtTime(1, now + this.attackTime);
    gainNode.gain.linearRampToValueAtTime(
      this.sustainLevel,
      now + this.attackTime + this.decayTime
    );
    gainNode.gain.setValueAtTime(this.sustainLevel, now + 1 - this.releaseTime);
    gainNode.gain.linearRampToValueAtTime(0, now + 1);

    oscillator.connect(gainNode);
    gainNode.connect(this.audioCtx.destination);

    oscillator.frequency.value = this.notes[index].frequency;
    oscillator.start(now);
    oscillator.stop(now + 1);
  }

  stop() {
    if (this.audioCtx?.state === 'running') {
      this.audioCtx.close();
    }
  }
}
