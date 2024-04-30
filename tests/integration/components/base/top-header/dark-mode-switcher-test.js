import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-component-patterns/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module(
  'Integration | Component | base/top-header/dark-mode-switcher',
  function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await render(hbs`<Base::TopHeader::DarkModeSwitcher />`);

      assert.dom().hasText('');

      // Template block usage:
      await render(hbs`
      <Base::TopHeader::DarkModeSwitcher>
        template block text
      </Base::TopHeader::DarkModeSwitcher>
    `);

      assert.dom().hasText('template block text');
    });
  },
);
