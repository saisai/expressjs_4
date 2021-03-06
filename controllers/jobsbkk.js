

var Jobsdbs = require('../collections/jobsbkks');



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
      res.render('jobsbkk', {
        title: 'Jobs Bkk',
        pagination: data.pagination,
        jobsdbs: data.collection.toJSON()
      });
    });
    
  }  

};
