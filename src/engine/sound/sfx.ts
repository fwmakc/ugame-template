import { Sound } from 'littlejsengine';
// import { Sound, zzfx } from 'littlejsengine';
import { getInstrument, getPreset } from './instruments';
import { IInstrument } from './instruments/interfaces/instrument.interface';
import { InstrumentType } from './instruments/types/instrument.type';

export class Sfx {
  instrument: InstrumentType | undefined;
  sound;

  constructor() {}

  set(i: IInstrument) {
    this.instrument = getInstrument(i);
  }

  setPreset(preset: string) {
    this.instrument = getPreset(preset);
  }

  generate() {
    if (!this.instrument) {
      return;
    }

    this.sound = new Sound(this.instrument);
  }

  play() {
    this.sound?.play();
  }
}
