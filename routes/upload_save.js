var express = require('express');
var router = express.Router();

/* GET home page. */

var multer  = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
    //cb(null, file.fieldname + '-' + Date.now())
  }
})

var upload = multer({ storage: storage })		


var mysql = require('mysql');
var conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root'
});
conn.query('USE jobs');

router.post('/', upload.single('fileUpload') ,function(req, res, next) {
  var txtName = req.body.txtName;
  var desc = req.body.desc;
	var filename = req.file.originalname;
	console.log(req.file);
	conn.query("INSERT INTO filesdata (name, filename, description)  VALUES (?,?, ?)",[txtName,filename, desc], function(err, results){
		if(err)
				throw err;
		
		//console.log(typeof(results));
		//res.render('list_add_form', {title: 'Add Form', position: results[0].position, link: results[0].sitelink});
    //console.log(results[0].position);
		res.redirect('/upload');
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
