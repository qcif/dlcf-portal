/**
 * Form.js
 *
 * @description :: Configuration for each Form
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: {
      type: 'string',
      unique: true,
      required: true
    },
    fields: {
      type: 'string'
    },
    branding: {
      model: 'brandingconfig',
      required: true
    }
  }
};
