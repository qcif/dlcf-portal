/**
 * BrandingConfig.js
 *
 * @description :: Configuration for each Brand
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    name: {
      type: 'string', required: true,
      unique: true
    },
    css: {
      type: 'string'
    },
    // Brand has many roles
    roles: {
      collection: 'role',
      via: 'branding'
    }
  }
};
