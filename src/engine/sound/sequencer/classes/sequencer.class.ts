import { ChannelType } from '../../channels/types/channel.type';
import { PatternsType } from '../types/patterns.type';

export class Sequencer {
  sequencer: Array<number> = [];

  patterns: Array<PatternsType> = [];

  patternsCollection: Array<string> = [];

  constructor() {}

  setPattern(name: string): void {
    this.patterns.push([]);
    this.patternsCollection.push(name);
  }

  addToPattern(name: string, c: ChannelType | undefined): void {
    if (!c) {
      return;
    }

    const index = this.patternsCollection.findIndex((value) => value === name);
    this.patterns[index].push(c);
  }

  addToSequencer(name: string): void {
    const index = this.patternsCollection.findIndex((value) => value === name);
    this.sequencer.push(index);
  }
}
