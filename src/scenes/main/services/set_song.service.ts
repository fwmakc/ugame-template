import { sounds } from '../../../engine';

export function setSongService() {
  const song = new sounds.Music();

  song.instruments.setPreset('pianoInstrument', 'piano');

  const pianoTrack0 = [
    'c1',
    null,
    null,
    null,
    ['d1', 50],
    null,
    null,
    null,
    null,
  ];
  const pianoTrack1 = [
    'c1',
    null,
    null,
    null,
    ['c2', 25],
    ['c2', 50],
    ['c2', 75],
    null,
  ];

  song.tracks.set('pianoTrack0', pianoTrack0);
  song.tracks.set('pianoTrack1', pianoTrack1);

  const pianoChannel0 = {
    instrument: song.instruments.get('pianoInstrument'),
    balance: -100,
    track: song.tracks.get('pianoTrack0'),
  };

  const pianoChannel1 = {
    instrument: song.instruments.get('pianoInstrument'),
    balance: 100,
    track: song.tracks.get('pianoTrack1'),
  };

  song.channels.set('pianoChannel0', pianoChannel0);
  song.channels.set('pianoChannel1', pianoChannel1);

  song.sequencer.setPattern('pianoChannel');
  song.sequencer.addToPattern(
    'pianoChannel',
    song.channels.get('pianoChannel0'),
  );
  song.sequencer.addToPattern(
    'pianoChannel',
    song.channels.get('pianoChannel1'),
  );
  song.sequencer.addToSequencer('pianoChannel');

  song.generate();

  return song;
}
