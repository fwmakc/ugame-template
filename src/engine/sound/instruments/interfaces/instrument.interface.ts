import { ShapeType } from '../enums/shape_type.enum';

export interface IInstrument {
  volume: number | undefined | null; // >= 0, 0.1
  frequency: number | undefined | null; // +-, 1
  attack: number | undefined | null; // 0...3, 0.01
  sustain: number | undefined | null; // 0...3, 0.01
  release: number | undefined | null; // 0...3, 0.01
  shape: keyof typeof ShapeType;
  shapeCurve: number | undefined | null; // >= 0, 0.1
  slide: number | undefined | null; // +-, 0.1
  deltaSlide: number | undefined | null; // +-, 0.1
  pitchJump: number | undefined | null; // +-, 10
  pitchJumpTime: number | undefined | null; // +-, 0.01
  repeatTime: number | undefined | null; // +-, 0.01
  noise: number | undefined | null; // +-, 0.1
  modulation: number | undefined | null; // +-, 0.1
  bitCrush: number | undefined | null; // +-, 0.1
  delay: number | undefined | null; // >= 0, 0.01
  sustainVolume: number | undefined | null; // >= 0, 0.01
  decay: number | undefined | null; // 0...1, 0.01
  tremolo: number | undefined | null; // 0...1, 0.01
}
