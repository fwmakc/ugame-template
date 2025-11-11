/*
import { game } from './engine/system';
import { sources } from './game/sources';
import { start } from './game/start';
import { MainScene } from './scenes/main.scene';
import { SplashScreenScene } from './scenes/splash_screen.scene';

const mainScene = new MainScene('main', 38, 20);
const splashScreenScene = new SplashScreenScene('splashScreen', 38, 20);
splashScreenScene.active = true;

game.scenes.add(mainScene);
game.scenes.add(splashScreenScene);

game.setSize(38, 20);
game.setSources(sources);
game.start(start);
*/

import { wait } from 'lib-loop';
import { Canvas, Game, Library, Scene } from './engine';

async function callbackMethod(this: any, delta: number, scene, count) {
  console.log(`[${count}]`, 1 / delta, delta);
  return true;
}

class Test1Scene extends Scene {
  count = 0;

  async create() {
    // await wait(2000);
    console.log('created...');
    console.log('[1]testScene.create');
  }
  mount() {
    console.log('[1]testScene.mount');
  }
  async update(delta) {
    // console.log('[1]testScene.update');
    callbackMethod(delta, this, this.count);
    this.count++;
    await wait(1000);
  }
  async render() {
    // console.log('[1]testScene.render');
    // console.log('wait...');
  }
  remove() {
    console.log('[1]testScene.remove');
  }
}

class Test2Scene extends Scene {
  cyclesCount = 0;

  create() {
    console.log('[2]testScene.create');
  }
  mount() {
    console.log('[2]testScene.mount');
  }
  async update() {
    // await wait(500);
    const { cyclesCount } = this;
    console.log('[2]testScene.update', cyclesCount);

    if (cyclesCount > 5) {
      this.removed = true;
    }
    this.cyclesCount++;
  }
  render() {
    console.log('[2]testScene.render');
  }
  remove() {
    console.log('[2]testScene.remove');
  }
}

class CanvasScene extends Scene {
  canvas;
  library;
  x = 10;
  y = 10;
  create() {
    this.canvas = new Canvas({
      width: 500,
      height: 400,
      background: '#cce',
    });
    this.library = new Library(this.canvas);
  }
  mount() {
    const rect1 = this.library.rectangle({
      x: this.x,
      y: this.y,
      width: 100,
      height: 100,
      fill: 'red',
    });

    const rect2 = this.library.rectangle({
      x: 0,
      y: 0,
      width: 100,
      height: 100,
      fill: 'green',
    });

    const round1 = this.library.round({
      x: this.canvas.width / 2,
      y: this.canvas.height / 2,
      radius: 100,
      fill: 'yellow',
    });

    this.canvas.layout.push('rect1', rect1);
    this.canvas.layout.push('rect2', rect2);
    this.canvas.layout.push('round1', round1);

    this.canvas.draw();

    // rectangle1.draw();
    // rectangle2.draw();
  }
  async update() {}
  render() {
    this.canvas.width -= 5;

    this.canvas.layout.moveAfter('rect1', 'rect2');

    const rect1 = this.canvas.layout.get('rect1');
    rect1.x = this.x;
    rect1.y = this.y;
    rect1.fill = 'rgba(200,0,200,0.5)';
    // rect1.fill = 'blue';
    rect1.borderColor = 'yellow';
    rect1.borderWidth = 2;

    const rect2 = this.canvas.layout.get('rect2');
    rect2.x += 10;
    rect2.y += 5;

    const round1 = this.canvas.layout.get('round1');
    round1.x = this.canvas.width / 2;

    this.canvas.clear();
    this.canvas.draw();
  }
  remove() {}
}

const test1Scene = new Test1Scene('test1Scene', 0, 0);
const test2Scene = new Test2Scene('test2Scene', 0, 0);
const canvasScene = new CanvasScene('canvasScene', 0, 0);

test1Scene.actived = true;
test2Scene.actived = true;
canvasScene.actived = true;

const game = new Game();

game.scenes.add(test1Scene).then(() => {
  console.log('---------- test1Scene created');
  // game.stop(() => {
  //   console.log('GAME OVER');
  // });
});
game.scenes.add(test2Scene);
game.scenes.add(canvasScene);

game.start();
