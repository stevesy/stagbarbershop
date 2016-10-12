module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		contentDir: '',
		jsSrc: [
			'<%= contentDir %>scripts/global.js'
		],
		sassSrc: [
			'<%= contentDir %>scss/*.scss',
			//excludes
			'!<%= contentDir %>scss/*/*.scss',
			'!<%= contentDir %>scss/_*.scss'
		],

		sass: {
			dist: {
				options: {
					style: 'compressed',
					sourcemap: 'none'
				},
				expand: true,
				flatten: true,
				src: '<%= sassSrc %>',
				dest: '<%= contentDir %>css/',
				ext: '.css'
			}
		},

		jshint: {
			all: ['Gruntfile.js', '<%= jsSrc %>']
		},

		watch: {
			sass: {
				files: '<%= contentDir %>scss/**/*.scss',
				tasks: 'sass:dist'
			},
			js: {
				files: ['Gruntfile.js', '<%= jsSrc %>'],
				tasks: 'jshint'
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');

};