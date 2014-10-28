passport-concur-example
=======================

Example for using [Concur's authentication strategy for Passport](http://github.com/concur/passport-concur)

##Usage

Copy config/template.json to config/default.json, and enter your Concur client app credentials. Then install the required modules, and run Grunt.

    $ grunt

Once running, navigate to http://localhost:5000. You should be prompted to login using your Concur credentials. Upon successful login, you'll be returned to the home page.