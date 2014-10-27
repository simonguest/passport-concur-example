'use strict';
module.exports = function (express, auth) {
  var router = express.Router();

  router.route('/')
    .get(auth.ensureAuthenticated, function (req, res) {
      res.send({'status':'home page'});
    });

  router.route('/error')
    .get(function(req, res){
      res.send({'error':'true'});
    });

  return router;
};