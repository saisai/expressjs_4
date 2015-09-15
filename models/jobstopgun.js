"use strict";


var Bookshelf = require('../dbconnect')();
//var Category = require('./category');
//var Tag = require('./tag');
//var User = require('./user');

// Post model
var Jobstopgun  = Bookshelf.Model.extend({

  tableName: 'tb_jobtopgun'
  
});


module.exports = Bookshelf.model('Jobstopgun', Jobstopgun);