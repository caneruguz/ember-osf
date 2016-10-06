import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('osf-tb-item', 'Integration | Component | osf tb item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{osf-tb-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#osf-tb-item}}
      template block text
    {{/osf-tb-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
