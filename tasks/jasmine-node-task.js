/*
 * grunt-jasmine-node-task
 * https://github.com/doclm/grunt-jasmine-node-task
 *
 * Copyright (c) 2012 Liam Magee
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  // Please see the grunt documentation for more information regarding task and
  // helper creation: https://github.com/cowboy/grunt/blob/master/docs/toc.md

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerTask('jasmine_node', 'Your task description goes here.', function() {
    grunt.log.write(grunt.helper('jasmine_node'));
  });

  // ==========================================================================
  // HELPERS
  // ==========================================================================

  grunt.registerHelper('jasmine_node', function() {
    return 'jasmine-node-task!!!';
  });

};
