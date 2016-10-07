import Ember from 'ember';
import layout from './template';

import loadAll from 'ember-osf/utils/load-relationship';


export default Ember.Component.extend({
  layout,
  store : Ember.inject.service(),
  files : Ember.A(),
  breadCrumbs : Ember.A(),
  loadFiles : function (item) { // When node changes load node files
      this.set('files', Ember.A([]));
      if(item){
          loadAll(item, 'files', this.get('files'));
          console.log(item, this.get('breadCrumbs'));
      } else {
          this.get('store').findRecord('node', this.get('nodeId')).then( model => {
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
          this.breadCrumbs.pushObject(item);
          console.log(this.get('breadCrumbs')[0]);
      },
      loadCrumb (item, index) {
          console.log(item);
          this.loadFiles(item);
          let slicedCrumbs = this.breadCrumbs.slice(0, index + 1);
          this.set('breadCrumbs', Ember.A(slicedCrumbs));
      }
  },
  init () {
      this._super(...arguments);
      this.loadFiles();
  }
});
