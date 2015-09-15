
var Base = require('./base');
var Jobsdb = require('../models/jobsbkk');


var Jobsdbs = Base.Collection.extend({
  model: Jobsdb
});


module.exports = Base.collection('Jobsdbs', Jobsdbs);