import Component from '@glimmer/component';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import localStorage from 'ember-local-storage-decorator';
import { action } from '@ember/object';

export type DarkModeOption = 'auto' | 'light' | 'dark';
export type ThemeStorage = DarkModeOption;

const MODES: DarkModeOption[] = [ 'auto', 'light', 'dark' ];

export default class BaseTopHeaderDarkModeSwitcherComponent extends Component {
  @localStorage() declare darkModeStorage: ThemeStorage;

  get darkMode() {
    return this.darkModeStorage || 'auto';
  }

  get nextOption() {
    const mode = this.darkMode;
    const index = MODES.indexOf(mode);
    const nextIndex = index < 2 ? (index + 1) : 0;
    return MODES[nextIndex] || 'auto';
  }

  @action
  setNextMode() {
    this.darkModeStorage = this.darkMode;
  }
}
