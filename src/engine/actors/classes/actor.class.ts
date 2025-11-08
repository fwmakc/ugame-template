import { EngineObject } from 'littlejsengine';
import { IVector } from '../../vectors';
import { IActor } from '../interfaces/actor.interface';
import { Scene } from '../../system';

export class Actor extends EngineObject {
  position: IVector = this.pos;
  scene: Scene;

  constructor(params: IActor) {
    const { scene, position, size, tiles, angle, color, order } = params;
    super(position, size, tiles, angle, color, order);

    this.scene = scene;

    // make object collide
    this.setCollision();

    // make object have static physics
    this.mass = 0;
  }
}
