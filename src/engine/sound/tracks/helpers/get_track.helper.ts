import { NoteNameType } from '../enums/note_name_type.enum';
import { NotesType } from '../types/notes.type';
import { TrackType } from '../types/track.type';

export function getTrack(notes: NotesType): TrackType {
  return notes.map((note) => {
    if (!note) {
      return 0;
    }

    if (!Array.isArray(note)) {
      note = [note];
    }

    let [name, attenuation = 0] = note;

    if (!name) {
      name = 0;
    } else if (Number(name)) {
      name = Number(name);
    } else {
      name = NoteNameType[name] || 0;
    }

    attenuation = (Number(attenuation) || 0) / 100;

    return (Number(name) || 0) + attenuation;
  });
}
