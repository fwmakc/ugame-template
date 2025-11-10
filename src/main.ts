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
import { Canvas, Game, Scene } from './engine';

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

const test1Scene = new Test1Scene('test1Scene', 0, 0);
const test2Scene = new Test2Scene('test2Scene', 0, 0);

test1Scene.actived = true;
test2Scene.actived = true;

const game = new Game();

game.scenes.add(test1Scene).then(() => {
  console.log('---------- test1Scene created');
  // game.stop(() => {
  //   console.log('GAME OVER');
  // });
});
game.scenes.add(test2Scene);

game.start();

const canvas = new Canvas({
  width: 500,
  height: 400,
  background: '#cce',
});

canvas.rectangle({
  x: 10,
  y: 10,
  width: 100,
  height: 100,
  fill: 'red',
});

canvas.layer[0].x = 120;
canvas.layer[0].y = 180;
canvas.layer[0].fill = 'blue';
canvas.layer[0].borderColor = 'yellow';
canvas.layer[0].borderWidth = 2;
