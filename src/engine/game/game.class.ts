import { GameLoop, MethodType } from './game_loop/game_loop.class';
import { ScenesManager } from './scenes_manager/scenes_manager.class';

export class Game {
  private loop;
  private play;
  private stopCallback;

  scenes;

  constructor() {
    this.initScenes();
    this.initLoop();
  }

  private initLoop() {
    this.loop = new GameLoop();
    this.loop.setCallback(async (deltaTime: number) => {
      await this.scenes.loop(deltaTime);
      return this.play;
    });
  }

  private initScenes() {
    this.scenes = new ScenesManager();
  }

  setLoop(method: MethodType): void {
    this.loop.setMethod(method);
  }

  start(): void {
    this.play = true;
    this.loop.start(this).then(() => {
      this.scenes.removeAll();
      this.stopCallback();
    });
  }

  stop(callback: () => void = () => {}): void {
    this.stopCallback = callback;
    this.play = false;
  }
}
