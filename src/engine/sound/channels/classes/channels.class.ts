import { getChannel } from '../helpers/get_channel.helper';
import { IChannel } from '../interfaces/channel.interface';
import { ChannelType } from '../types/channel.type';

export class Channels {
  channels: Array<ChannelType> = [];

  channelsCollection: Array<string> = [];

  constructor() {}

  get(name: string): ChannelType | undefined {
    const index = this.channelsCollection.findIndex((value) => value === name);
    return this.channels?.[index];
  }

  set(name: string, c: IChannel | undefined): void {
    if (!c) {
      return;
    }

    const channel = getChannel(c);

    this.channels.push(channel);
    this.channelsCollection.push(name);
  }
}
