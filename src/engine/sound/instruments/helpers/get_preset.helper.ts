import { presets } from '../presets/presets';
import { InstrumentType } from '../types/instrument.type';
import { getInstrument } from './get_instrument.helper';
import { getInterfaceFromPreset } from './get_interface_from_preset.helper';

export function getPreset(preset: string): InstrumentType {
  return getInstrument(getInterfaceFromPreset(presets[preset]));
}
