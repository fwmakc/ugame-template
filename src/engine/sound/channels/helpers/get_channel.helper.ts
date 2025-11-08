import { IChannel } from '../interfaces/channel.interface';
import { ChannelType } from '../types/channel.type';

export function getChannel(c: IChannel): ChannelType {
  const { instrument, balance, track } = c || {};

  const i = instrument || 0;
  const b = Math.round(balance || 0 / 10) / 10;
  const t = track || [];

  return [i, b, ...t];
}
