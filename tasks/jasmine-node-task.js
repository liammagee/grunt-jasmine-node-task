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

    grunt.registerMultiTask('jasmine_node', 'Your task description goes here.', function() {
        var jasmine = require('jasmine-node')
        var util,
            Path= require('path');
        try {
            util = require('util')
        } catch(e) {
            util = require('sys')
        }


        var specFolder = this.file.src;
        var isVerbose = false;
        var showColors = true;
        var teamcity = process.env.TEAMCITY_PROJECT_NAME || false;
        var useRequireJs = false;
        var extentions = "js";
        var match = '.';
        var matchall = false;
        var autotest = false;
        var useHelpers = true;
        var forceExit = false;

        var junitreport = {
            report: false,
            savePath : "./reports/",
            useDotNotation: true,
            consolidate: true
        }

        var regExpSpec = new RegExp(match + (matchall ? "" : "spec\\.") + "(" + extentions + ")$", 'i')
        var onComplete = function(runner, log) {
            util.print('\n');
            if (runner.results().failedCount == 0) {
                exitCode = 0;
            } else {
                exitCode = 1;
            }
            if (forceExit) {
                process.exit(exitCode);
            }
        };

        try {
            // Tell grunt this task is asynchronous.
            var done = this.async();
            // Your async code.
            jasmine.executeSpecsInFolder(specFolder,
                onComplete,
                isVerbose,
                showColors,
                teamcity,
                useRequireJs,
                regExpSpec,
                junitreport);


        }
        catch (e) {
            console.log(e)
        }
        ;
    });

    // ==========================================================================
    // HELPERS
    // ==========================================================================

    grunt.registerHelper('jasmine_node', function() {
        //return 'jasmine-node-task!!!';
    });

};
