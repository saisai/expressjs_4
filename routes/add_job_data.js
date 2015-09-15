var express = require('express');
var router = express.Router();
var moment = require('moment');

/* GET home page. */
/*
var app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
*/
var mysql = require('mysql');
var conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root'
});
conn.query('USE jobs');


router.post('/', function(req, res, next) {
	//var data = JSON.parse(req.body);
	var title = req.body.title;
	var link = req.body.link;
	var current_date_time = moment().format('YYYY-MM-D hh-mm-ss'); // using moment.js
	
	 //conn.query('INSERT INTO sitedetails (position, sitelink, created_at, updated_at) VALUES ('+title, link, current_date_time,current_date_time+')', function(err, rows){
	
   conn.query('SELECT * FROM sitedetails	WHERE sitelink =?',link,function(err,results){
		 
			if(err)
				throw err;
			if(results.length == 0)
			{
				var query = 'INSERT INTO sitedetails (position, sitelink, created_at, updated_at) VALUES ("' + title + '", "' + link  + '", "' + current_date_time + '", "' + current_date_time + '")';
				conn.query(query, function(err, rows){
        if(err) throw err;
				
				res.json({result: true});
				});
				
			}
			else 
				res.json({result: false});
			
		 
	 });

	
	
	
	//res.json({result: true});
	//console.log(data.title);
	//console.log(req.body.title);
	//res.send(JSON.stringify(req.body));
	//res.json({ title: true});
	//res.send(req.body);
  //res.render('index', { title: 'Express' });
});


//var config = require('../config');
//var Bookshelf = require('../dbconnect')(config);
// This solves the circular module dependency problem
//Bookshelf.plugin('registry');

//var jobsdbController = require('../controllers/jobsdb');
//router.get('/', jobsdbController.getPosts);

module.exports = router;
