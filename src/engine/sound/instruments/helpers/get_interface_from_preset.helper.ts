import { ShapeType } from '../enums/shape_type.enum';
import { IInstrument } from '../interfaces/instrument.interface';
import { getShape } from './get_shape.helper';

export function getInterfaceFromPreset(
  preset: Array<number | undefined>,
): IInstrument {
  const [
    volume,
    _unknown,
    frequency,
    attack,
    sustain,
    release,
    shape,
    shapeCurve,
    slide,
    deltaSlide,
    pitchJump,
    pitchJumpTime,
    repeatTime,
    noise,
    modulation,
    bitCrush,
    delay,
    sustainVolume,
    decay,
    tremolo,
  ] = preset;

  return {
    volume,
    frequency,
    shape: getShape(shape) as keyof typeof ShapeType,
    attack,
    sustain,
    release,
    shapeCurve,
    slide,
    deltaSlide,
    pitchJump,
    pitchJumpTime,
    repeatTime,
    noise,
    modulation,
    bitCrush,
    delay,
    sustainVolume,
    decay,
    tremolo,
  };
}
