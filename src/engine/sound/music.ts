import { ZzFXMusic } from 'littlejsengine';
import { Channels } from './channels';
import { Instruments } from './instruments';
import { Sequencer } from './sequencer';
import { Tracks } from './tracks';

export class Music {
  instruments: Instruments;
  channels: Channels;
  sequencer: Sequencer;
  tracks: Tracks;

  bpm = 120;

  sound;

  constructor() {
    this.instruments = new Instruments();
    this.channels = new Channels();
    this.sequencer = new Sequencer();
    this.tracks = new Tracks();
  }

  setBpm(bpm: number): void {
    this.bpm = bpm;
  }

  get() {
    const sound: any = [];

    const instruments = this.instruments.instruments;
    sound.push(instruments);

    const patterns = this.sequencer.patterns;
    sound.push(patterns);

    const sequencer = this.sequencer.sequencer;
    sound.push(sequencer);

    const bpm = this.bpm;
    sound.push(bpm);

    return sound;
  }

  generate() {
    const sound = this.get();
    this.sound = new ZzFXMusic(sound);
  }

  play() {
    this.sound?.playMusic();
  }
}
