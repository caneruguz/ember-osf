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

    click(e) {
        // Set selected status
        // if(e.shiftKey || e.metaKey) {
        this.sendAction('multiSelect', this.get('item'), e);
        // } else {
        //
        // }

        this.sendAction('selectItem', this.get('item'));
    },

    doubleClick() {
        let item = this.get('item');
        if (item.get('canHaveChildren')) {
            this.sendAction('navigateToItem', item);
        } else {
            this.sendAction('openItem', item);
        }
    },

    actions: {
        open() {
            this.sendAction('openItem', this.get('item'));
        }
    }
});
