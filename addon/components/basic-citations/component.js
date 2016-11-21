import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
    layout,
    store: Ember.inject.service(),
    citationTypes : ['apa','modern-language-association','chicago-author-date'],
    citationTexts : Ember.A(),
    _getStyles () {
        this.get('store').findRecord('styled-citation', 'apa').then(result => {
            console.log(result.get('citation'));
        });
    },
    init(){
        this._super(...arguments);
        this._getStyles();
    }

});
