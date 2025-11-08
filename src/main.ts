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
