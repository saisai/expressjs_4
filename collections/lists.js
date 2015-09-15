
var Base = require('./base');
var List = require('../models/list');


var Lists = Base.Collection.extend({
  model: List
});


module.exports = Base.collection('Lists', Lists);