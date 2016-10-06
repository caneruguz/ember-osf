import Ember from 'ember';
import layout from './template';

import loadAll from 'ember-osf/utils/load-relationship';


export default Ember.Component.extend({
  layout,
  store : Ember.inject.service(),
  files : Ember.A(),
  currentModel : null,
  loadFiles : function (item) { // When node changes load node files
      this.set('files', Ember.A([]));
      if(item){
          loadAll(item, 'files', this.get('files'));
      } else {
          this.get('store').findRecord('node', this.get('nodeId')).then( model => {
              this.set('currentItem', item);
              loadAll(model, 'files', this.get('files'));
          });
      }
  },
  actions : {
      clickItem () {
          console.log('clickItemTop');


      },
      dblClickItem (item) {
          console.log('dblClickItemTop');
          this.loadFiles(item);
      }
  },
  init () {
      this._super(...arguments);
      this.loadFiles();
  }
});
