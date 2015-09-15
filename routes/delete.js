var express = require('express');
var router = express.Router();

/* GET home page. */

var mysql = require('mysql');
var conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root'
});
conn.query('USE jobs');

router.get('/', function(req, res, next) {
  console.log(req.query.q);
	conn.query("DELETE FROM sitedetails WHERE id= ?",req.query.q, function(err, results){
		if(err)
				throw err;
		res.redirect('/list');
	});
  

});

/*
var config = require('../config');
var Bookshelf = require('../dbconnect')(config);
// This solves the circular module dependency problem
Bookshelf.plugin('registry');

var jobsdbController = require('../controllers/jobsdb');
router.get('/', jobsdbController.getPosts);
*/
module.exports = router;
