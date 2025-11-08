import { system } from '../engine';
import { drawLogoService } from './main/services/draw_logo.service';
import { renderService } from './main/services/render.service';
import { resetService } from './main/services/reset.service';
import { updateService } from './main/services/update.service';

export class MainScene extends system.Scene {
  create() {}

  mount() {
    resetService(this);
  }

  update() {
    updateService(this);
  }

  updatePost() {}

  render() {
    renderService(this);
  }

  renderPost() {
    // if (!this.active) {
    //   drawLogoService();
    // }
  }
}
