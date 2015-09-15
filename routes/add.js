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


function getFilesData(cb)
{
	conn.query("SELECT * FROM filesdata", function(err, results){
		
		if(err)
			cb(err, null);
		else
			cb(null, results);
		
	});
}


router.get('/', function(req, res, next) {
  console.log(req.query.q);
	
	getFilesData(function (err, dataFromFilesData){
		//console.log(zzz);
		//
		conn.query("SELECT * FROM sitedetails WHERE id= ?",req.query.q, function(err, results){
		if(err)
				throw err;				
		res.render('list_add_form', {title: 'Add Form',id : req.query.q, position: results[0].position, link: results[0].sitelink, jsonobj: dataFromFilesData});
    
	});
		//
		
	});
	
	/*
	conn.query("SELECT * FROM sitedetails WHERE id= ?",req.query.q, function(err, results){
		if(err)
				throw err;				
		res.render('list_add_form', {title: 'Add Form',id : req.query.q, position: results[0].position, link: results[0].sitelink});
    
	});
	*/


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
