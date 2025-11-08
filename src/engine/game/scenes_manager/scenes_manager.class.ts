import { Scene } from '../../scene/scene.class';
import { ScenesStack } from '../scenes_stack/scenes_stack.class';

export class ScenesManager {
  private scenesStack;

  constructor() {
    this.scenesStack = new ScenesStack();
  }

  async add(scene: Scene): Promise<void> {
    await this.scenesStack.add(scene);
  }

  async loop(deltaTime: number): Promise<void> {
    await this.scenesStack.mount();
    await this.scenesStack.update(deltaTime);
    await this.scenesStack.render();
  }

  getByName(sceneName: string): Array<Scene> {
    return this.scenesStack.getByName(sceneName);
  }

  remove(): void {
    return this.scenesStack.remove();
  }

  removeAll(): void {
    return this.scenesStack.removeAll();
  }

  removeByName(sceneName: string): void {
    return this.scenesStack.removeByName(sceneName);
  }
}
