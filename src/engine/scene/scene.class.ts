import { vectors } from '..';
import { actorsCollection } from '../actors';

export abstract class Scene {
  actived: boolean;
  created: boolean;
  mounted: boolean;
  removed: boolean;

  name: string;
  size: vectors.IVector;

  actors: typeof actorsCollection;

  constructor(name, x, y) {
    this.actived = false;
    this.created = false;
    this.mounted = false;
    this.removed = false;

    this.name = name;
    this.size = vectors.vector(x, y);

    this.actors = actorsCollection;
  }

  abstract create(): Promise<void> | void;
  abstract mount(): Promise<void> | void;
  abstract update(deltaTime: number): Promise<void> | void;
  abstract render(): Promise<void> | void;
  abstract remove(): Promise<void> | void;
}
