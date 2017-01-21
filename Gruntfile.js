module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		contentDir: '',
		sassSrc: [
			'<%= contentDir %>scss/*.scss',
			//excludes
			'!<%= contentDir %>scss/*/*.scss',
			'!<%= contentDir %>scss/_*.scss'
		],

		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				expand: true,
				flatten: true,
				src: '<%= sassSrc %>',
				dest: '<%= contentDir %>css/',
				ext: '.css'
			}
		},

		watch: {
			sass: {
				files: '<%= contentDir %>scss/**/*.scss',
				tasks: 'sass:dist'
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');

};