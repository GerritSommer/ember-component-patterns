import { guidFor } from '@ember/object/internals';
import Component from '@glimmer/component';

interface Args {
  name: 'string';
  language?: 'string'; // https://prismjs.com/#supported-languages
}

export default class HighlightComponent extends Component<Args> {}
