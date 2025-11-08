import {
  gamepadWasPressed,
  keyWasPressed,
  mouseWasPressed,
} from 'littlejsengine';
import { SettingsState } from '../../../states/settings.state';

export function isStartedService() {
  const { controls } = SettingsState;

  if (controls === 'gamepad' && gamepadWasPressed(0)) {
    return true;
  }

  if (
    controls === 'keyboard' &&
    (keyWasPressed('Enter') || keyWasPressed('Space'))
  ) {
    return true;
  }

  if (controls === 'mouse' && mouseWasPressed(0)) {
    return true;
  }

  return false;
}
