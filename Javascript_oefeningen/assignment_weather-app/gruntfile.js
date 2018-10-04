module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
     sass:{
             dist: {
                 files: {
                     'css/main.css' : 'scss/main.scss'
                 }
             }
         },
         watch:{
           options: {
               livereload: false
           },
           css: {
               files: ['**/*.scss'],
               tasks: ['sass']
           }
       }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};