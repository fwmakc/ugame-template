import { Scene, system } from '../engine';
import { drawLogoService } from './main/services/draw_logo.service';
import { renderService } from './main/services/render.service';
import { resetService } from './main/services/reset.service';
import { updateService } from './main/services/update.service';

export class MainScene extends Scene {
  create() {}

  mount() {
    resetService(this);
  }

  update() {
    updateService(this);
  }

  render() {
    renderService(this);
    // if (!this.active) {
    //   drawLogoService();
    // }
  }

  remove() {}
}
