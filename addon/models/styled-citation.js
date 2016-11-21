import DS from 'ember-data';

import OsfModel from './osf-model';

/**
 * @module ember-osf
 * @submodule models
 */

/**
 * Model for OSF APIv2 citation styles, read only
 * This is in active development as of Nov 2016. May need maintenance or move to
 * full citation component in the future
 * See example here
 * * https://api.osf.io/v2/nodes/ezcuj/citation/apa/
 *
 * @class Citation
 */
export default OsfModel.extend({
    citation: DS.attr('string')
});
