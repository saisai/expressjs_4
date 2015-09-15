

var Jobsdbs = require('../collections/lists');



module.exports = {

  /*
   * GET /
  **/
  getPosts: function (req, res, next) {
    var jobsdbs = new Jobsdbs();
    var page = parseInt(req.query.p, 10);
    var limit = parseInt(req.query.limit, 100) || 100;
    var order = req.query.order || "asc";
    var currentpage = page || 1;

    var opts = {
      limit: limit,
      page: currentpage,
      order: order
    };

    jobsdbs.fetchBy('id', opts)
    .then(function (data) {
			//console.log(data.collection.toJSON());
      res.render('list', {
        title: 'Listings',
        pagination: data.pagination,
        jobsdbs: data.collection.toJSON()
      });
    });
    
  }  

};
