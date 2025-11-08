import { Scene } from '../scene';

export class StackScenes {
  stack: Array<Scene> = [];

  constructor() {}

  add(scene: Scene): void {
    this.stack.unshift(scene);
    scene.create();
  }

  getByName(sceneName: string): Array<Scene> {
    return this.stack.filter((scene: Scene) => scene.name === sceneName);
  }

  remove(): void {
    this.stack.shift();
  }

  removeByName(sceneName: string): void {
    this.stack = this.stack.filter((scene: Scene) => scene.name !== sceneName);
  }

  mount() {
    this.stack.forEach((scene: Scene) => {
      if (scene.mounted) return;
      scene.mounted = true;
      scene.mount();
    });
  }

  update() {
    this.stack.forEach((scene: Scene) => {
      if (!scene.active) return;
      scene.update();
    });
  }

  updatePost() {
    this.stack.forEach((scene: Scene) => {
      if (!scene.active) return;
      scene.updatePost();
    });
  }

  render() {
    this.stack.forEach((scene: Scene) => {
      scene.render();
    });
  }

  renderPost() {
    this.stack.forEach((scene: Scene) => {
      scene.renderPost();
    });
  }
}
