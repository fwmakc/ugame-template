import { audioContext } from 'littlejsengine';

let started = false;

export const onInit = (callback: () => void) => {
  if (audioContext.state !== 'running') {
    audioContext.resume();
  }

  if (!started && audioContext.state === 'running') {
    started = true;
    callback();
  }
};
