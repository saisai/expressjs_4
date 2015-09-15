"use strict";


var Bookshelf = require('../dbconnect')();
//var Category = require('./category');
//var Tag = require('./tag');
//var User = require('./user');

// Post model
var Jobswebbkk  = Bookshelf.Model.extend({

  tableName: 'tb_webjobsbangkok'
  
});


module.exports = Bookshelf.model('Jobswebbkk', Jobswebbkk);