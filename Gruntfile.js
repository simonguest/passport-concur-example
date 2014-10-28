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
    bower: {
      install: {
        options: {
          copy: false,
          targetDir: './scripts',
          verbose: true
        }
      }
    },
    clean: {
      scripts: [
        '/scripts'
      ]
    },
    copy: {
      scripts: {
        files: [
          {expand: true, cwd: 'bower_components/bootstrap/dist/', src: '**/*', dest: 'scripts/bootstrap/'}
        ]
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
  grunt.registerTask('default', ['npm-install', 'bower:install', 'clean:scripts', 'copy:scripts', 'notify:server', 'nodemon:dev']);
};