import Controller from '@ember/controller';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import localStorage from 'ember-local-storage-decorator';
import { action } from '@ember/object';

import type { DarkModeOption, ThemeStorage } from 'ember-component-patterns/components/base/top-header/dark-mode-switcher';

export default class ApplicationController extends Controller {
  @localStorage() declare darkModeStorage: ThemeStorage;

  get darkMode() {
    return this.darkModeStorage || 'auto';
  }

  @action
  setDarkMode(mode: DarkModeOption) {
    this.darkModeStorage = mode;
  }
}
