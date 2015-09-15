var express = require('express');
var nodemailer = require('nodemailer');
var heredoc = require('heredoc');
var router = express.Router();
var moment = require('moment');
/* GET home page. */

var mysql = require('mysql');
var conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root'
});
conn.query('USE jobs');


// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'youemail@gmail.com',
        pass: 'yourgmailpassword'
    }
});

function getSiteDetails(id, cb)
{
	conn.query("SELECT * FROM sitedetails WHERE id= ?",id, function(err, resultSiteDetail){
		if(err)
				cb(err, null);
		
		// add applytimes
		var current_date_time = moment().format('YYYY-MM-D hh-mm-ss'); // using moment.js
		conn.query("INSERT INTO applytimes (sitelink, created_at, updated_at) VALUES ( ?, ?, ?)",[resultSiteDetail[0].sitelink, current_date_time, current_date_time], function(err, results){
				if(err)
					throw err;
				cb(null, resultSiteDetail);
		});
			
	});
}

router.get('/', function(req, res, next) {
  console.log(req.query.q);
	
	getSiteDetails(req.query.q, function(err, cb) {
		//console.log(cb[0].file_id);
		
		var strHereDoc = heredoc.strip(function() {/*
			say something
			
			 */
		});

		
		conn.query("SELECT name,filename FROM filesdata WHERE id= ?",cb[0].file_id, function(err, results){
			
			if(err)
				throw err;
			
			//send mail
			
			// setup e-mail data with unicode symbols
			var mailOptions = {
			from: 'User <yourgmail@gmail.com>', // sender address
			to: cb[0].email, // list of receivers
			subject: results[0].name, // Subject line
			//text: 'asdf ', // plaintext body
			//html: '<b>something </b>', // html body
			html: strHereDoc,
			attachments : [
			{
				filename: 'cv.doc',
				path: './uploads/' + results[0].filename,
			}
			]
			};

			// send mail with defined transport object
			transporter.sendMail(mailOptions, function(error, info){
			if(error){
					console.log(error);
			}else{
					console.log('Message sent: ' + info.response);
					res.redirect('/list');
			}
			});		
			
			// send mail end
			
			
		});
	})
});


module.exports = router;
