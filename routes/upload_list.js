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

	conn.query("SELECT * FROM filesdata", function(err, results){
		if(err)
				throw err;
		
		
		//console.log(results);
		res.render('upload_list', {title: 'Upload List',jsonobj : results});
		//res.render('list_add_form', {title: 'Add Form',id : req.query.q, position: results[0].position, link: results[0].sitelink});
    //console.log(results[0].position);
		//res.redirect('/list');
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
