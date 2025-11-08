import { TrackType } from '../../tracks/types/track.type';

export interface IChannel {
  instrument: number | undefined | null;
  balance: number | undefined | null; // -100...100
  track: TrackType | undefined | null;
}
