
var Base = require('./base');
var Jobsdb = require('../models/jobsdb');


var Jobsdbs = Base.Collection.extend({
  model: Jobsdb
});


module.exports = Base.collection('Jobsdbs', Jobsdbs);