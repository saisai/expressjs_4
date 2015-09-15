
var Base = require('./base');
var  Jobstopgun = require('../models/jobstopgun');


var Jobstopguns = Base.Collection.extend({
  model: Jobstopgun
});


module.exports = Base.collection('Jobstopguns', Jobstopguns);