module.exports = function(grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-karma');
    grunt.initConfig({
        karma: {
            unit: {
                options: {
                    files: [
                        'src/**/*.js',
                        'test/**/*.js'
                    ],
                    frameworks: ['jasmine'],
                    browsers: ['PhantomJS'],
                    port: 10000 + Math.round(Math.random() * 1000),
                    // reporters: ['progress', 'junit', 'coverage'],
                    autoWatch: true
                }
            }
        }
    });
};