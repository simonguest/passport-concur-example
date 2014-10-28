'use strict';
var express = require('express');
var app = express();
var auth = require('./auth')(app);

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function (req, res, next) {
  console.log('Incoming request from ' + req.path);
  next();
});

app.use('/scripts', express.static(__dirname + '/scripts'));
app.use('/styles', express.static(__dirname + '/styles'));

var authRouter = require('./routes/auth')(express, auth);
app.use('/auth', authRouter);

var homeRouter = require('./routes/home')(express, auth, __dirname);
app.use('/', homeRouter);

module.exports = app;

