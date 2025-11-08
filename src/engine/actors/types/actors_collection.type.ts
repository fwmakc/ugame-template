import { Actor } from '../classes/actor.class';

export type ActorsCollectionType = {
  [key: string]: Actor | Array<Actor>;
};
