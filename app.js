var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var routes = require('./routes/index');
var users = require('./routes/users');
var jobsthai = require('./routes/jobsthai');
var add_job_data = require('./routes/add_job_data');
var list = require('./routes/list');
var deletelist = require('./routes/delete');
var addlist = require('./routes/add');
var add_detail = require('./routes/add_detail');
var detail = require('./routes/detail');
var apply = require('./routes/apply');
var edit = require('./routes/edit');
var edit_save_detail = require('./routes/edit_save_detail');
var upload = require('./routes/upload');
var upload_save = require('./routes/upload_save');
var upload_list = require('./routes/upload_list');
var delete_file = require('./routes/delete_file');
var jobsbkk = require('./routes/jobsbkk');
var jobstopgun = require('./routes/jobstopgun');
var jobswebbkk = require('./routes/jobswebbkk');
var check_email = require('./routes/check_email');


var test = require('./routes/test');

var app = express();

app.locals.moment = require('moment');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(multer()); // for parsing multipart/form-data



app.use('/', routes);
app.use('/users', users);
app.use('/jobsthai', jobsthai);
app.use('/add_job_data', add_job_data);
app.use('/list', list);
app.use('/delete', deletelist);
app.use('/add', addlist);
app.use('/add_detail', add_detail);
app.use('/detail', detail);
app.use('/apply', apply);
app.use('/edit', edit);
app.use('/edit_save_detail', edit_save_detail);
app.use('/upload', upload);
app.use('/upload_save', upload_save);
app.use('/upload_list', upload_list);
app.use('/delete_file', delete_file);
app.use('/jobsbkk', jobsbkk);
app.use('/jobstopgun', jobstopgun);
app.use('/jobswebbkk', jobswebbkk);
app.use('/check_email', check_email);

app.use('/test', test);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
