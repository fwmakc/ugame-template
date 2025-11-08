import {
  setCameraPos,
  setCameraScale,
  setCanvasFixedSize,
  // setFontDefault,
} from 'littlejsengine';
import { vectors } from '../engine';

export function start(game) {
  const { size } = game;

  setCanvasFixedSize(vectors.vector(1920, 1080)); // 1080p
  setCameraPos(size.scale(0.5)); // center camera
  setCameraScale(48);
  // setFontDefault('Bescii');
}
