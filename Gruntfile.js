'use strict';
module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  /* jshint ignore:start */
  grunt.initConfig({
    notify: {
      server: {
        options: {
          message: 'Example is now running!'
        }
      }
    },
    nodemon: {
      dev: {
        script: 'main.js'
      }
    }
  });
  /* jshint ignore:end */

  // Default task(s).
  grunt.registerTask('default', ['notify:server', 'nodemon:dev']);
};