"use strict";


var Bookshelf = require('../dbconnect')();
//var Category = require('./category');
//var Tag = require('./tag');
//var User = require('./user');

// Post model
var Post = Bookshelf.Model.extend({

  tableName: 'job_thai'
  
});


module.exports = Bookshelf.model('Post', Post);