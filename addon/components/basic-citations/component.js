import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
    layout,
    store: Ember.inject.service(),
    // Using a very simple method here, may need to advance to Ember.object if other needs arise.
    citations : Ember.A([
        Ember.Object.create({
            id: 'apa',
            label : 'APA',
            citation : null,
            error : null
        }),
        Ember.Object.create({
            id: 'modern-language-association',
            label : 'MLA',
            citation : null,
            error : null
        }),
        Ember.Object.create({
            id: 'chicago-author-date',
            label : 'Chicago',
            citation : null,
            error : null
        })
    ]),
    _getStyles () {
        for(let c of this.get('citations')){
            this.get('store').findRecord('styled-citation', c.get('id') + '_h7naf').then(result => {
                if(result){
                    c.set('citation', result.get('citation'));
                } else {
                    c.set('error', 'Citation couldn\'t load from servers. Try refreshing this page.' );
                }
            }, error => {
                c.set('error', 'Citation couldn\'t load from servers. Try refreshing this page.' );
            });
        }

    },
    init(){
        this._super(...arguments);
        this._getStyles();
    }

});
