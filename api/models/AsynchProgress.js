/**
 * AsynchProgress.js
 *
 * @description :: Tracks Asynchrounous progress started by the portal.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var moment = require('moment');

module.exports = {
  attributes: {
    name: {
      type: 'string',
      required: true
    },
    branding: {
      model: 'brandingconfig',
      required: true
    },
    date_started: {
      type: 'datetime',
      defaultsTo: function() {
        return moment().format('YYYY-MM-DDTHH:mm:ss');
      }
    },
    date_completed: {
      type: 'datetime'
    },
    started_by: {
      type: 'string',
      required: true
    },
    currentIdx: {
      type: 'integer'
    },
    targetIdx: {
      type: 'integer'
    },
    status: {
      type: 'string'
    },
    message: {
      type: 'string'
    }
  }
};
