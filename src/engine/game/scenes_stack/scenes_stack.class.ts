import { Scene } from '../../scene/scene.class';

export class ScenesStack {
  stack: Array<Scene> = [];

  constructor() {}

  async add(scene: Scene): Promise<Scene> {
    this.stack.unshift(scene);
    await scene.create();
    scene.created = true;
    return scene;
  }

  getByName(sceneName: string): Array<Scene> {
    return this.stack.filter((scene: Scene) => scene.name === sceneName);
  }

  remove(): void {
    const scene = this.stack.shift();
    if (scene) {
      scene.remove();
    }
  }

  removeAll(): void {
    while (this.stack.length) {
      this.remove();
    }
  }

  removeByName(sceneName: string): void {
    this.stack = this.stack.filter((scene: Scene) => {
      if (scene.name !== sceneName) {
        return true;
      }
      scene.remove();
      return false;
    });
  }

  async loop(deltaTime: number): Promise<void> {
    await this.mount();
    await this.update(deltaTime);
    await this.render();
  }

  private async mount(): Promise<void> {
    for (const scene of this.stack) {
      if (!scene.created) continue;
      if (scene.mounted) continue;
      scene.mounted = true;
      await scene.mount();
    }
  }

  private async update(deltaTime: number): Promise<void> {
    for (const scene of this.stack) {
      if (!scene.created) continue;
      if (scene.actived) {
        await scene.update(deltaTime);
      }
      if (scene.removed) {
        this.removeByName(scene.name);
      }
    }
  }

  private async render(): Promise<void> {
    for (const scene of this.stack) {
      if (!scene.created) continue;
      await scene.render();
    }
  }
}
