var express = require('express');
var router = express.Router();

/* GET home page. */

var mysql = require('mysql');

var conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root'
		//,debug: true
});
conn.query('USE jobs');

router.get('/', function(req, res, next) {
        
		current_page = req.query.p || 1;
		items_per_page = 20;
		start_index = (current_page - 1) * items_per_page;
		
		function getCountId(cb)
		{
		conn.query("SELECT count(id) as ID FROM sitedetails",function (err, results){
			if(err)
				cb(err, null);
			else
				cb(null,results[0].ID);			
		});
		}
		
		
		getCountId(function (err, total_items){
			if(err)
				throw err;
			else
			{
				total_pages = Math.ceil(total_items / items_per_page);
				
				//conn.query("SELECT * FROM sitedetails LIMIT ?, ?",[start_index, items_per_page],function (err, results){
				conn.query("SELECT *, (select count(id) FROM applytimes WHERE applytimes.sitelink = sitedetails.sitelink) as TIMES FROM `sitedetails` LIMIT ?, ?",[start_index, items_per_page],function (err, results){
				if(err)
					throw err;
				else
					res.render('test', {title: 'test', totalPage: total_pages, jsonobj: results });
				});
				
				
			}
		})
		
		
				
		


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
