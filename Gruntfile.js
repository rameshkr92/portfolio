(function(){
  'use strict';

  module.exports = function(grunt){
    // Project configuration
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      // Grunt task configuration
      karma: {
        unit: {
          configFile: './test/karma.conf.js'
        }
      },

      less: {
        development: {
          options: {
            optimization: 2
          },
          files: {
            // destination & source
            'angular/css/animate/animate.css':   'angular/css/less/animate/animate.less',
            'angular/css/animate/animation.css': 'angular/css/less/animate/animation.less',
            'angular/css/favLang/favLang.css':   'angular/css/less/favLang/favLang.less',
            'angular/css/main/footer.css':       'angular/css/less/main/footer.less',
            'angular/css/main/header.css':       'angular/css/less/main/header.less',
            'angular/css/main/navbar.css':       'angular/css/less/main/navbar.less',
            'angular/css/main/portfolio.css':    'angular/css/less/main/portfolio.less',
            'angular/css/main/skills.css':       'angular/css/less/main/skills.less',
            'angular/css/testing/testing.css':   'angular/css/less/testing/testing.less',
            'angular/css/users/usersApp.css':    'angular/css/less/users/usersApp.less',
            'angular/css/weather/weather.css':   'angular/css/less/weather/weather.less'
          }
        }
      },

      watch: {
        karma: {
          files: ['angular/js/**/*.js', 'test/unit/**/*.js'],
          tasks: ['karma:unit:run']
        },
        styles: {
          files: ['angular/css/less/*.less'],
          tasks: ['less'],
          options: {
            nospawn: true
          }
        }
      }
    });

    // Load grunt tasks
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    // Register default grunt task
    grunt.registerTask('default', ['karma', 'less', 'watch']);
  };
})();
