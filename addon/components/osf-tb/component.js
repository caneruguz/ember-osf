import Ember from 'ember';
import layout from './template';

import loadAll from 'ember-osf/utils/load-relationship';


export default Ember.Component.extend({
  layout,
  store : Ember.inject.service(),
  files : Ember.A(),
  breadCrumbs : Ember.A(),
  columns: Ember.A(['itemName']),
  selectedItems : Ember.A(),
  loadFiles : function (item) { // When node changes load node files
      this.set('files', Ember.A([]));
      if(item){
          loadAll(item, 'files', this.get('files'));
      } else {
          this.get('store').findRecord('node', this.get('nodeId')).then( model => {
              loadAll(model, 'files', this.get('files'));
          });
      }
  },
  updateSelectedStatus : function(item){
      let selected = this.get('selectedItems');
      if(selected.includes(item)){
          selected.removeObject(item);
      } else {
          selected.pushObject(item);
      }
  },

  actions : {
      clickItem (item) {
          this.updateSelectedStatus(item);
      },
      dblClickItem (item) {
          this.loadFiles(item);
          this.breadCrumbs.pushObject(item);
      },
      loadCrumb (item, index) {
          this.loadFiles(item);
          let slicedCrumbs = this.breadCrumbs.slice(0, index + 1);
          this.set('breadCrumbs', Ember.A(slicedCrumbs));
      },
      multiSelect(item, e) {
          let selected = this.get('selectedItems');
          let items = this.get('files');
          if(e.shiftKey || e.metaKey){
              // handle multi select
              if(e.metaKey){
                  this.updateSelectedStatus(item);
              }
              if(e.shiftKey){
                  // get the last item selected index
                  let lastItem = selected[selected.length-1];
                  let lastIndex = items.indexOf(lastItem);
                  // get current item selected index
                  var currentItemIndex = items.indexOf(item);
                  // find out which index is bigger and buidl loop
                  if(lastIndex > -1 && currentItemIndex > -1){
                      if(currentItemIndex > lastIndex){
                          for(let m = lastIndex; m <= currentItemIndex; m++){
                              items[m].set('isSelected', true);
                          }
                      } else {
                          for(let n = currentItemIndex; n <= lastIndex; n++){
                              items[n].set('isSelected', true);
                          }
                      }
                  }

              }

          } else {
              // handle single select
              selected.clear();
              selected.pushObject(item);

          }

      }
  },
  init () {
      this._super(...arguments);
      this.loadFiles();
      this.set('columns', Ember.A(this.get('options.columns')));
  }
});
