import { getTrack } from '../helpers/get_track.helper';
import { NotesType } from '../types/notes.type';
import { TrackType } from '../types/track.type';

export class Tracks {
  tracks: Array<TrackType> = [];

  tracksCollection: Array<string> = [];

  constructor() {}

  get(name: string): TrackType | undefined {
    const index = this.tracksCollection.findIndex((value) => value === name);
    return this.tracks?.[index];
  }

  set(name: string, t: NotesType | undefined): void {
    if (!t) {
      return;
    }

    const channel = getTrack(t);

    this.tracks.push(channel);
    this.tracksCollection.push(name);
  }
}
