import { system } from '../engine';
import { game } from '../engine/system';
import { drawLogoService } from './main/services/draw_logo.service';
import { isStartedService } from './main/services/is_started.service';

export class SplashScreenScene extends system.Scene {
  create() {}

  mount() {}

  update() {
    const isStarted = isStartedService();
    if (!isStarted) {
      return;
    }
    this.active = false;
    const mainScene = game.scenes.getByName('main');

    if (mainScene?.[0]) {
      mainScene[0].active = true;
    }
  }

  updatePost() {}

  render() {
    if (this.active) {
      drawLogoService();
    }
  }

  renderPost() {}
}
