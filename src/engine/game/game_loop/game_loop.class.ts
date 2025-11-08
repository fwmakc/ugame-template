import { frameLoop } from 'lib-loop';

export type CallbackType = (deltaTime: number) => Promise<boolean> | boolean;

export type MethodType = (
  callback: CallbackType,
  context?: any,
) => Promise<void> | void;

export class GameLoop {
  private callback: CallbackType;
  private method: MethodType;

  constructor() {
    this.callback = async (deltaTime) => true;
    this.method = frameLoop;
  }

  setCallback(customCallback: CallbackType) {
    this.callback = customCallback;
  }

  setMethod(customMethod: MethodType) {
    this.method = customMethod;
  }

  async start() {
    await this.method(this.callback);
  }
}
