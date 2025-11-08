import { vectors } from '..';
import { actorsCollection } from '../actors';

export abstract class Scene {
  active: boolean;
  mounted: boolean;

  name: string;
  size: vectors.IVector;

  actors: typeof actorsCollection;

  constructor(name, x, y) {
    this.active = false;
    this.mounted = false;

    this.name = name;
    this.size = vectors.vector(x, y);

    this.actors = actorsCollection;
  }

  abstract create(): void;
  abstract mount(): void;
  abstract update(): void;
  abstract updatePost(): void;
  abstract render(): void;
  abstract renderPost(): void;
}
