/**
 * Institution.js
 *
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    email_address: {
      type: 'string'
    },
    grid_id: {
      type: 'string'
    },
    wikipedia_url: {
      type: 'string'
    },
    established: {
      type: 'string'
    }
  }
};
