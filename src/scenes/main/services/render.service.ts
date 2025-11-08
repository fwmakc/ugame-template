import { cameraPos, drawRect } from 'littlejsengine';
import { colors } from '../../../engine';

export function renderService(scene) {
  const { size } = scene;

  // draw a the background
  drawRect(cameraPos, size.scale(2), colors.hsl(0, 0, 0.5));
  drawRect(cameraPos, size, colors.hsl(0, 0, 0.02));
}
