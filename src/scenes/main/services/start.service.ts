import { Ball } from '../../../actors/ball.actor';
import { vectors } from '../../../engine';

export function startService(scene) {
  const { size } = scene;

  scene.actors.ball = new Ball(vectors.vector(size.x / 2, size.y / 2), scene);
}
