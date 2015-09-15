

var Posts = require('../collections/posts');



module.exports = {

  /*
   * GET /
  **/
  getPosts: function (req, res, next) {
    var posts = new Posts();
    var page = parseInt(req.query.p, 10);
    var limit = parseInt(req.query.limit, 100) || 100;
    var order = req.query.order || "asc";
    var currentpage = page || 1;

    var opts = {
      limit: limit,
      page: currentpage,
      order: order
    };

    posts.fetchBy('id', opts)
    .then(function (data) {
      res.render('jobsthai', {
        title: 'Posts',
        pagination: data.pagination,
        posts: data.collection.toJSON()
      });
    });
    
  }  

};
