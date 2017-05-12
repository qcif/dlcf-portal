/**
 * `copy`
 *
 * ---------------------------------------------------------------
 *
 * Copy files and/or folders from your `assets/` directory into
 * the web root (`.tmp/public`) so they can be served via HTTP,
 * and also for further pre-processing by other Grunt tasks.
 *
 * #### Normal usage (`sails lift`)
 * Copies all directories and files (except CoffeeScript and LESS)
 * from the `assets/` folder into the web root -- conventionally a
 * hidden directory located `.tmp/public`.
 *
 * #### Via the `build` tasklist (`sails www`)
 * Copies all directories and files from the .tmp/public directory into a www directory.
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-copy
 *
 */
module.exports = function(grunt) {

  grunt.config.set('copy', {
    dev: {
      files: [
        {
          expand: true,
          cwd: './assets',
          src: ['**/*.!(coffee|less)'],
          dest: '.tmp/public'
        },
        {
          expand: true,
          cwd: './node_modules/@angular',
          src: '**/*',
          dest: '.tmp/public/node_modules/@angular'
        },
        {
          expand: true,
          cwd: './node_modules/rxjs',
          src: '**/*',
          dest: '.tmp/public/node_modules/rxjs'
        },
        {
          expand: true,
          cwd: './node_modules/zone.js',
          src: '**/*',
          dest: '.tmp/public/node_modules/zone.js'
        },
        {
          expand: true,
          cwd: './node_modules/core-js',
          src: '**/*',
          dest: '.tmp/public/node_modules/core-js'
        },
        {
          expand: true,
          cwd: './node_modules/systemjs',
          src: '**/*',
          dest: '.tmp/public/node_modules/systemjs'
        },
        {
          expand: true,
          cwd: './node_modules/lodash',
          src: '**/*',
          dest: '.tmp/public/node_modules/lodash'
        },
        {
          expand: true,
          cwd: './node_modules/ng2-datetime',
          src: '**/*',
          dest: '.tmp/public/node_modules/ng2-datetime'
        },
        {
          expand: true,
          cwd: './node_modules/bootstrap-datepicker',
          src: '**/*',
          dest: '.tmp/public/node_modules/bootstrap-datepicker'
        },
        {
          expand: true,
          cwd: './node_modules/bootstrap-timepicker',
          src: '**/*',
          dest: '.tmp/public/node_modules/bootstrap-timepicker'
        },
        {
          expand: true,
          cwd: './node_modules/moment',
          src: '**/*',
          dest: '.tmp/public/node_modules/moment'
        },
        {
          expand: true,
          cwd: './node_modules/ng2-completer',
          src: '**/*',
          dest: '.tmp/public/node_modules/ng2-completer'
        },
        {
          expand: true,
          cwd: './node_modules/ngx-bootstrap',
          src: '**/*',
          dest: '.tmp/public/node_modules/ngx-bootstrap'
        }
      ]
    },
    build: {
      files: [{
        expand: true,
        cwd: '.tmp/public',
        src: ['**/*'],
        dest: 'www'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
};
