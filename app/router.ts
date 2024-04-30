import EmberRouter from '@ember/routing/router';
import config from 'ember-component-patterns/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('component-layouts', function () {
    this.route('simple');
    this.route('template-only');
    this.route('provider', function () {
      this.route('yielded-components');
    });
    this.route('named-blocks', function () {
      this.route('optional-blocks');
    });
    this.route('blocks', function () {
      this.route('inverse-block');
      this.route('optional-block');
      this.route('yielded-components');
      this.route('iterated-yields');
    });
  });
});
