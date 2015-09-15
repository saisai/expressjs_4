"use strict";


var Bookshelf = require('../dbconnect')();
//var Category = require('./category');
//var Tag = require('./tag');
//var User = require('./user');

// Post model
var Jobsdb = Bookshelf.Model.extend({

  tableName: 'jobs_db'
  
});


module.exports = Bookshelf.model('Jobsdb', Jobsdb);