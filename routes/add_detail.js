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

router.post('/', function(req, res, next) {
  var id = req.body.id;
	console.log(id);
  var email = req.body.txtEmail;
  var desc = req.body.desc;
  var txtSalary = req.body.txtSalary;
  var selectFile = req.body.selectFile;
	//conn.query("UPDATE sitedetails SET email= ?, description = ?, salary = ?, file_id =? WHERE id= ?",email, desc, txtSalary, selectFile,id, function(err, results){
	conn.query("UPDATE sitedetails SET email= ?, description = ?, salary = ?, file_id =? WHERE id= ?",[email,desc,txtSalary,selectFile,id], function(err, results){
		if(err)
				throw err;
		
		//console.log(typeof(results));
		//res.render('list_add_form', {title: 'Add Form', position: results[0].position, link: results[0].sitelink});
    //console.log(results[0].position);
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
