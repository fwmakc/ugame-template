import { ShapeType } from '../enums/shape_type.enum';
import { IInstrument } from '../interfaces/instrument.interface';
import { InstrumentType } from '../types/instrument.type';

export function getInstrument(i: IInstrument): InstrumentType {
  return [
    i.volume || 1,
    0,
    i.frequency || 220,
    i.attack || 0,
    i.sustain || 0,
    i.release || 0.1,
    Number(ShapeType[i.shape]) || 0,
    i.shapeCurve || 1,
    i.slide || 0,
    i.deltaSlide || 0,
    i.pitchJump || 0,
    i.pitchJumpTime || 0,
    i.repeatTime || 0,
    i.noise || 0,
    i.modulation || 0,
    i.bitCrush || 0,
    i.delay || 0,
    i.sustainVolume || 1,
    i.decay || 0,
    i.tremolo || 0,
  ];
}
