'use strict';
module.exports = function (express, auth) {
  var router = express.Router();

  router.route('/login')
    .get(auth.passport.authenticate('concur'));

  router.route('/logout')
      .get(function(req, res){
        req.logout();
        res.redirect('/');
      });

  router.route('/callback')
    .get(auth.passport.authenticate('concur', { failureRedirect: '/error' }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/home');
    });

  return router;
};