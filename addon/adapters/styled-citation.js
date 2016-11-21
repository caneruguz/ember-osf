import OsfAdapter from './osf-adapter';

export default OsfAdapter.extend({
    buildURL(modelName, id, snapshot, requestType, data) { // jshint ignore:line
        let base = this._super(...arguments).split('styled_', 1);
        let url = `${base}nodes/h7naf/citation/${id}/`;
        console.log(base, url, arguments);
        return url;
    }
});
