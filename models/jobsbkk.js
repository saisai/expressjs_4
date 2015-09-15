"use strict";


var Bookshelf = require('../dbconnect')();
//var Category = require('./category');
//var Tag = require('./tag');
//var User = require('./user');

// Post model
var Jobsbkk = Bookshelf.Model.extend({

  tableName: 'tb_jobbkk'
  
});


module.exports = Bookshelf.model('Jobsdb', Jobsbkk);