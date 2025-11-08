import { sounds } from '../../../engine';

export function setSfxService() {
  const sfx = new sounds.Sfx();
  sfx.setPreset('piano');
  sfx.generate();

  return sfx;
}
