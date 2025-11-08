import { actors, colors, particles, tiles, vectors } from '../engine';
import { Scene } from '../engine/system';
import { breakSound } from '../sounds/break.sound';
import { Ball } from './ball.actor';

export class Brick extends actors.Actor {
  constructor(position: vectors.IVector, scene: Scene) {
    super({
      position,
      size: vectors.vector(2, 1),
      tiles: tiles.tile(1, vectors.vector(32, 16)),
      angle: 0,
      color: colors.random(),
      scene,
    });
  }

  collideWithObject(ball: Ball): boolean {
    // destroy brick when hit with ball
    this.destroy();
    breakSound.play(this.position);

    // make explosion effect
    const color1 = this.color;
    const color2 = color1.lerp(colors.hsl(), 0.5);
    new particles.Emitter(
      this.position,
      0, // pos, angle
      this.size,
      0.1,
      200,
      3.14, // emitSize, emitTime, emitRate, emitCone
      tiles.tile(0, 16), // tileIndex, tileSize
      color1,
      color2, // colorStartA, colorStartB
      color1.scale(1, 0),
      color2.scale(1, 0), // colorEndA, colorEndB
      0.3,
      0.8,
      0.3,
      0.05,
      0.05, // time, sizeStart, sizeEnd, speed, angleSpeed
      0.99,
      0.95,
      0.4,
      3.14, // damp, angleDamp, gravity, cone
      0.1,
      0.8,
      false,
      true, // fade, randomness, collide, additive
    );

    // set ball trail color
    if (ball.trailEffect) {
      ball.trailEffect.colorStartA = this.color;
      ball.trailEffect.colorStartB = this.color.lerp(colors.hsl(), 0.5);
    }

    return true;
  }
}
