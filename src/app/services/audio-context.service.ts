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
  private sustainLevel = 0.01;
  private releaseTime = 0.25;

  play(index: number, panning?: number, intonation?: undefined | 'staccato') {
    this.audioCtx = new AudioContext();

    const oscillator = this.audioCtx.createOscillator();
    oscillator.type = 'sine';

    const gainNode = this.audioCtx.createGain();

    const now = this.audioCtx.currentTime;
    const duration = intonation === 'staccato' ? 0.5 : 1;

    gainNode.gain.setValueAtTime(0, 0);
    gainNode.gain.linearRampToValueAtTime(
      intonation === 'staccato' ? 0.75 : 0.5,
      now + (intonation === 'staccato' ? this.attackTime / 2 : this.attackTime)
    );
    gainNode.gain.linearRampToValueAtTime(
      this.sustainLevel,
      now +
        (intonation === 'staccato' ? this.attackTime / 2 : this.attackTime) +
        (intonation === 'staccato' ? this.decayTime / 2 : this.decayTime)
    );
    gainNode.gain.setValueAtTime(
      this.sustainLevel,
      now +
        duration -
        (intonation === 'staccato' ? this.releaseTime / 2 : this.releaseTime)
    );
    gainNode.gain.linearRampToValueAtTime(0, now + duration);

    const panner = new StereoPannerNode(this.audioCtx, {
      pan: panning ? panning : undefined,
    });

    oscillator
      .connect(gainNode)
      .connect(panner)
      .connect(this.audioCtx.destination);

    oscillator.frequency.value = this.notes[index].frequency;
    oscillator.start(now);
    oscillator.stop(now + duration);
  }

  stop() {
    if (this.audioCtx?.state === 'running') {
      this.audioCtx.close();
    }
  }

  playArpeggio() {
    const arpeggioNotes = [1, 3, 5, 8];

    let curr = 0;
    let ascending = true;

    const arpeggioInterval = setInterval(() => {
      this.play(arpeggioNotes[curr] - 1, undefined, 'staccato');

      if (ascending) {
        if (curr < arpeggioNotes.length - 1) {
          curr++;
        } else if (curr === arpeggioNotes.length - 1) {
          ascending = false;
          curr--;
        }
      } else if (curr > 0) {
        curr--;
      } else {
        clearInterval(arpeggioInterval);
      }
    }, 200);
  }
}
