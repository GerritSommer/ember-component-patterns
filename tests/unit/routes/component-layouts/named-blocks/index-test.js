import { module, test } from 'qunit';
import { setupTest } from 'ember-component-patterns/tests/helpers';

module('Unit | Route | component-layouts/named-blocks/index', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:component-layouts/named-blocks/index');
    assert.ok(route);
  });
});
