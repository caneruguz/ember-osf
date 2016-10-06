import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  selected : false,
  click () {
      this.toggleProperty('selected', true);
      this.sendAction('clickItem', this.get('item'));
  },
  doubleClick () {
      this.sendAction('dblClickItem', this.get('item'));
  }
});
