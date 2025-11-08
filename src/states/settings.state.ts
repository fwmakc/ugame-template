export interface ISettingsState {
  controls: 'gamepad' | 'keyboard' | 'mouse';
}

export const SettingsState: ISettingsState = {
  controls: 'keyboard',
};
