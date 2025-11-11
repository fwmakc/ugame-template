import { GameLoop, MethodType } from './game_loop/game_loop.class';
import { ScenesManager } from './scenes_manager/scenes_manager.class';

export class Game {
  readonly scenes: ScenesManager = new ScenesManager();
  readonly loop: GameLoop = new GameLoop();

  private play;
  private stopCallback;

  constructor() {
    this.loop.setCallback(async (deltaTime: number) => {
      await this.scenes.loop(deltaTime);
      return this.play;
    });
  }

  setLoop(method: MethodType): void {
    this.loop.setMethod(method);
  }

  start(): void {
    this.play = true;
    this.loop.start().then(() => {
      this.scenes.removeAll();
      if (this.stopCallback) {
        this.stopCallback();
      }
    });
  }

  stop(callback: () => void = () => {}): void {
    this.stopCallback = callback;
    this.play = false;
  }
}
