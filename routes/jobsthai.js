var express = require('express');
/*
var mysql = require('mysql');
var dbconfig = require('../config/database');
*/
var router = express.Router();

//var conn = mysql.createConnection(dbconfig.connection);
/*
var conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root'
});
conn.query('USE jobs');
*/

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'jobs',
    charset: 'utf8'
  }
});

var Bookshelf = require('bookshelf')(knex);
var _ = require('lodash');
// User model
var User = Bookshelf.Model.extend({
  tableName: 'job_thai'
});

var Users = Bookshelf.Collection.extend({
  model: User
});

// bookshelf start


// bookshelf end

var config = require('../config');
var Bookshelf = require('../dbconnect')(config);
// This solves the circular module dependency problem
Bookshelf.plugin('registry');

var postsController = require('../controllers/posts');
router.get('/', postsController.getPosts);
//router.get('/', function(req, res, next){
	
		
		
		/*
		Users.forge()
    .fetch()
    .then(function (collection) {
			res.render('jobsthai', {title: 'Job Thai', data: collection.toJSON()});
			//res.render('jobsthai', {title: 'Job Thai', data: res.json({error: false, data: collection.toJSON()}) });
      //res.json({error: false, data: collection.toJSON()});
    })
    .otherwise(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    });
		*/
		
		//res.render('jobsthai', {title: 'Job Thai', data: User});
		/*
    conn.query('SELECT * FROM job_thai', function(err, rows){
        if(err) throw err;
        console.log(rows[0].title);
        res.render('jobsthai', {title: 'Job Thai', data: rows});
    });*/

//});



module.exports = router;
