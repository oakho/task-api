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
      defaultsTo: ''
    },
    locker : {
      type: 'string',
      defaultsTo: null
    },
    private : {
      type: 'boolean',
      defaultsTo: false
    }
  }
};

