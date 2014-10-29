'use strict';
module.exports = function (express, auth) {
  var concur = require('concur-platform');
  var router = express.Router();

  router.route('/')
    .get(function (req, res) {
      res.render('login.ejs');
    });

  router.route('/home')
    .get(auth.ensureAuthenticated, function (req, res) {
      concur.user.get({oauthToken: req.user.accessToken})
        .then(function (user) {
          res.render('home.ejs', {user: user, oauthToken: req.user.accessToken});
        });
    });

  router.route('/error')
    .get(function (req, res) {
      res.send({'error': 'true'});
    });

  return router;
};