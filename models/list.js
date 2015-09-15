"use strict";


var Bookshelf = require('../dbconnect')();
//var Category = require('./category');
//var Tag = require('./tag');
//var User = require('./user');



// Post model
var List = Bookshelf.Model.extend({

  tableName: 'sitedetails'
	

});

/*
List.where('id', 25)
	.fetch()
	.then(function(user){
		console.log(user.related('sitedetails'));
	});
*/
/*
new List()
	.fetch()
	.then(function(model) {
		console.log(model.get('created_at'));
	});
*/
/*
List.where({id: 25}).fetch({withRelated: ['applytimess']}).then(function(book){
	console.log(JSON.stringify(book.related('applytimess')));
});
*/
module.exports = Bookshelf.model('List', List);