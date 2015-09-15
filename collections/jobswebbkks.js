
var Base = require('./base');
var  Jobswebbkk = require('../models/jobswebbkk');


var Jobswebbkks = Base.Collection.extend({
  model: Jobswebbkk
});


module.exports = Base.collection('Jobswebbkks', Jobswebbkks);