import { getPaused, setPaused } from 'littlejsengine';
import { Game } from './system/classes/game.class';
import { StackScenes } from './system/classes/stack_scenes.class';
import { Scene } from './system/scene';
import * as state from './system/state';

const stackScenes = new StackScenes();
const game = new Game(stackScenes);

export { Scene, game, stackScenes, state, getPaused, setPaused };
