'use strict';
module.exports = function (app) {
  var config = require('config');
  var auth = {};
  auth.passport = require('passport');
  var session = require('express-session');

  app.use(session({ secret: 'simon', resave: true, saveUninitialized: true}));
  app.use(auth.passport.initialize());
  app.use(auth.passport.session());

  var ConcurStrategy = require('passport-concur').Strategy;

  auth.passport.use(new ConcurStrategy({
      consumerKey: config.get('concur.consumerKey'),
      clientID: config.get('concur.clientID'),
      clientSecret: config.get('concur.clientSecret'),
      callbackURL: 'http://localhost:5000/auth/callback'
    },
    function(accessToken, refreshToken, instanceURL, expirationDate, done) {
      console.log(accessToken);
      // simulate looking up the access token and returning a user profile
      return done(null, {username: 'test', id: '12345'});
    }
  ));

  auth.passport.serializeUser(function (user, done) {
    // simulating serializing the user
    done(null, user.id);
  });

  auth.passport.deserializeUser(function (id, done) {
    // simulating deserializing the user
    done(null, {username: 'test', id: '12345'});
  });

  auth.ensureAuthenticated = function(req, res, next) {
    console.log('Authenticated? ' + req.isAuthenticated());
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/auth/login');
  };

  return auth;
};