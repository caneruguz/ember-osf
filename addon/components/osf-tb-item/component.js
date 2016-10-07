import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  selected: Ember.computed('selectedItems.[]', function() {
      // TODO: This would be better if selectedItems were a hash. Can Ember
      // observe when properties are added to or removed from an object?
      let selectedItems = this.get('selectedItems');
      let index = selectedItems.indexOf(this.get('item'));
      return index > -1;
  }),
  click (e) {
      this.sendAction('multiSelect', this.get('item'), e);
  },
  doubleClick () {
      if(this.get('item.kind') === 'folder'){
          this.sendAction('dblClickItem', this.get('item'));
      }
  }
});
