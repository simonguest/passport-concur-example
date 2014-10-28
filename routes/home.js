'use strict';
module.exports = function (express, auth) {
  var router = express.Router();

  router.route('/')
    .get(function (req, res) {
      res.send('<h1>Login Page</h1><a href=\'/auth/login\'>Login</a>');
    });

  router.route('/home')
      .get(auth.ensureAuthenticated, function(req, res){
        res.send('<h1>Welcome Page</h1><a href=\'/auth/logout\'>Logout</a>');
      });

  router.route('/error')
    .get(function(req, res){
      res.send({'error':'true'});
    });

  return router;
};