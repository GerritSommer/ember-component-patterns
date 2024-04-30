import { module, test } from 'qunit';
import { setupTest } from 'ember-component-patterns/tests/helpers';

module('Unit | Route | component-layouts/template-only', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:component-layouts/template-only');
    assert.ok(route);
  });
});
