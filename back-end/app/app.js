'use strict';
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var log4js = require('log4js');
var log = log4js.getLogger("startup");


import SearchController from './controller/search-controller';
import * as ErrorHandle from './util/error-handler';

var app = express();

app.use(log4js.connectLogger(log4js.getLogger("http"), { level: log4js.levels.INFO, format: ':method :url' }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next)=> {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/iheartcatalog/search', SearchController);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

if (app.get('env') === 'development') {
  app.use(ErrorHandle.DevErrorHandle);
}
app.use(ErrorHandle.ProdErrorHandle);


module.exports = app;