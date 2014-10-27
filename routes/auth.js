'use strict';
module.exports = function (express, auth) {
  var router = express.Router();

  router.route('/login')
    .get(auth.passport.authenticate('concur'), function (req, res) {
      res.send({status: 'hello world'});
    });

  router.route('/callback')
    .get(auth.passport.authenticate('concur', { failureRedirect: '/error' }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/');
    });

  return router;
};