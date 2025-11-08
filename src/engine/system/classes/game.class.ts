import { engineInit } from 'littlejsengine';
import { StackScenes } from './stack_scenes.class';
import { SourcesType } from '../types/sources.type';
import { vectors } from '../..';

export class Game {
  scenes: StackScenes;
  sources: SourcesType = [];
  size: vectors.IVector;

  constructor(stackScenes: StackScenes) {
    this.scenes = stackScenes;
    this.size = vectors.vector();
  }

  setSize(x: number, y: number) {
    this.size = vectors.vector(x, y);
  }

  setSources(sources: SourcesType) {
    this.sources = sources;
  }

  start(callback: (args) => void = () => {}) {
    engineInit(
      // called once after the engine starts up
      // setup the game
      () => {
        callback(this);
      },

      // called every frame at 60 frames per second
      // handle input and update the game state
      () => {
        this.update();
      },

      // called after physics and objects are updated
      // setup camera and prepare for render
      () => {
        this.updatePost();
      },

      // called before objects are rendered
      // draw any background effects that appear behind objects
      () => {
        this.render();
      },

      // called after objects are rendered
      // draw effects or hud that appear above all objects
      () => {
        this.renderPost();
      },
      this.sources,
    );
  }

  update() {
    this.scenes.mount();
    this.scenes.update();
  }

  updatePost() {
    this.scenes.updatePost();
  }

  render() {
    this.scenes.render();
  }

  renderPost() {
    this.scenes.renderPost();
  }
}
