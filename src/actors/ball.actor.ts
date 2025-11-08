import { actors, colors, math, particles, tiles, vectors } from '../engine';
import { Scene } from '../engine/system';
import { bounceSound } from '../sounds/bounce.sound';
import { startSound } from '../sounds/start.sound';
import { Paddle } from './paddle.actor';

export class Ball extends actors.Actor {
  trailEffect;

  constructor(position: vectors.IVector, scene: Scene) {
    super({ position, size: vectors.vector(0.5), tiles: tiles.tile(0), scene });

    // make a bouncy ball
    this.velocity = vectors.vector(0, -0.1);
    this.restitution = 1;
    this.mass = 1;

    // attach a trail effect
    const color = colors.hsl(0, 0, 0.2);
    this.trailEffect = new particles.Emitter(
      this.position,
      0, // pos, angle
      this.size,
      0,
      80,
      3.14, // emitSize, emitTime, emitRate, emitCone
      tiles.tile(0, 16), // tileIndex, tileSize
      color,
      color, // colorStartA, colorStartB
      color.scale(0),
      color.scale(0), // colorEndA, colorEndB
      2,
      0.4,
      1,
      0.001,
      0.05, // time, sizeStart, sizeEnd, speed, angleSpeed
      0.99,
      0.95,
      0,
      3.14, // damp, angleDamp, gravity, cone
      0.1,
      0.5,
      false,
      true, // fade, randomness, collide, additive
    );
    this.addChild(this.trailEffect);

    startSound.play(this.position, 1, 1);
  }

  collideWithObject(object: actors.Actor): boolean {
    console.log('-- collideWithObject', {
      object,
      objectType: typeof object,
      paddle: Paddle,
      paddleType: typeof Paddle,
    });
    // only need special handling when colliding with paddle
    if (object != this.scene.actors.paddle) return true;

    // prevent colliding with paddle if moving upwards
    if (this.velocity.y > 0) return false;

    // put english on the ball when it collides with paddle
    this.velocity = this.velocity.rotate(
      0.2 * (object.position.x - this.position.x),
    );
    this.velocity.y = math.max(-this.velocity.y, 0.2);

    // speed up
    const speed = math.min(1.04 * this.velocity.length(), 0.5);
    this.velocity = this.velocity.normalize(speed);
    bounceSound.play(this.position, 1, speed * 2);

    // prevent default collision code
    return false;
  }
}
