import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-component-patterns/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | highlight', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Highlight />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Highlight>
        template block text
      </Highlight>
    `);

    assert.dom().hasText('template block text');
  });
});
