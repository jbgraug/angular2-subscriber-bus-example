/**
 * Merged gruntfile tasks
 */

module.exports = function (grunt) {

	'use strict';

	// Load all grunt tasks in package.json
	require('load-grunt-tasks')(grunt, {
		scope: 'devDependencies'
	});

	var defaultConfig = require('./gruntfile.tasks')(grunt);

	grunt.initConfig(grunt.util._.merge(defaultConfig, {

		/* Custom configration options or overrides */

	}));

	/* Custom tasks or overrides */

	grunt.registerTask('default', [
		'connect:dev',
		'open:dev',
        'concurrent:watch'
    ]);
};
