import OsfAdapter from './osf-adapter';

export default OsfAdapter.extend({
    buildURL(modelName, id, snapshot, requestType, data) { // jshint ignore:line
        let base = this._super(...arguments).split('styled_', 1);
        // Very hacky way to get both node and id in the findRecord call
        let info = id.split('_');
        let url = `${base}nodes/${info[1]}/citation/${info[0]}/`;
        console.log(base, url, arguments);
        return url;
    }
});
