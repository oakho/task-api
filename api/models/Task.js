/**
* Task.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
    label : {
      type: 'string',
      required: true
    },
    locker : {
      type: 'string',
      defaultsTo: null
    },
    private : {
      type: 'boolean',
      defaultsTo: false
    }
  },
  autoUpdatedAt: false,
  beforeUpdate:function(values, next) {
    values.updatedAt = new Date();
    next();
  }
};

