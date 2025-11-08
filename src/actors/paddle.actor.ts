import {
  clamp,
  gamepadStick,
  isUsingGamepad,
  keyIsDown,
  mousePos,
} from 'littlejsengine';
import { actors, vectors } from '../engine';
import { SettingsState } from '../states/settings.state';
import { Scene } from '../engine/system';

export class Paddle extends actors.Actor {
  constructor(position: vectors.IVector, scene: Scene) {
    super({ position, size: vectors.vector(5, 0.5), scene });
  }

  update() {
    // control with gamepad or mouse
    switch (SettingsState.controls) {
      case 'gamepad':
        if (isUsingGamepad) {
          this.position.x += gamepadStick(0).x;
        }
        break;

      case 'keyboard':
        if (keyIsDown('ArrowLeft')) {
          this.position.x -= 0.5;
        }
        if (keyIsDown('ArrowRight')) {
          this.position.x += 0.5;
        }
        break;

      case 'mouse':
        this.position.x = mousePos.x;
        break;

      default:
        break;
    }

    // keep paddle in bounds of level
    this.position.x = clamp(
      this.position.x,
      this.size.x / 2,
      this.scene.size.x - this.size.x / 2,
    );
  }
}
