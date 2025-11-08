import { getInstrument } from '../helpers/get_instrument.helper';
import { getPreset } from '../helpers/get_preset.helper';
import { IInstrument } from '../interfaces/instrument.interface';
import { InstrumentType } from '../types/instrument.type';

export class Instruments {
  instruments: Array<InstrumentType> = [];

  instrumentsCollection: Array<string> = [];

  constructor() {}

  get(name: string): number | undefined {
    const index = this.instrumentsCollection.findIndex(
      (value) => value === name,
    );
    return index;
  }

  set(name: string, i: IInstrument | undefined): void {
    if (!i) {
      return;
    }

    const instrument = getInstrument(i);

    this.instruments.push(instrument);
    this.instrumentsCollection.push(name);
  }

  setPreset(name: string, preset: string): void {
    const instrument = getPreset(preset);

    this.instruments.push(instrument);
    this.instrumentsCollection.push(name);
  }
}
