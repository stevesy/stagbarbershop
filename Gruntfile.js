const sass = require('node-sass');

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		browserify: {
			site: {
				options: {
					transform: [['babelify', { 
						presets: 'env'
					}]],
					browserifyOptions: {
						debug: true
					}
				},
				files: {
					'./website/wp-content/themes/stagbarbershop/js/site.js': './website/wp-content/themes/stagbarbershop/js/src/index.js'
				}
			}
		},

		uglify: {
			dist: {
				options: {
					sourceMap: true,
					quoteStyle: 1,
				},
				files: {
					'./website/wp-content/themes/stagbarbershop/js/site.js': './website/wp-content/themes/stagbarbershop/js/site.js'
				}
			}
		},

		sass: {
			options: {
				implementation: sass,
				sourceMap: true
			},
			dist: {
				files: {
					'./website/wp-content/themes/stagbarbershop/style.css': './website/wp-content/themes/stagbarbershop/scss/style.scss'
				}
			}
		},

		postcss: {
			options: {
				processors: [
					require('autoprefixer')({
						browsers: ['last 2 versions']
					}),
					require('cssnano')
				]
			},
			dist: {
				src: './website/wp-content/themes/stagbarbershop/css/style.css'
			}
		},

		watch: {
			css: {
				files: ['./website/wp-content/themes/stagbarbershop/scss/**/*.scss'],
				tasks: 'sass'
			},
			js: {
				files: ['Gruntfile.js', './website/wp-content/themes/stagbarbershop/js/src/**/*.js'],
				tasks: 'browserify'
			}
		}
	});

	grunt.registerTask('scripts', [
		'browserify'
	]);

	grunt.registerTask('scripts-prod', [
		'browserify',
		'uglify'
	]);

	grunt.registerTask('styles', [
		'sass'
	]);

	grunt.registerTask('styles-prod', [
		'sass',
		'postcss'
	]);

	grunt.registerTask('build', [
		'scripts',
		'styles'
	]);
	
	grunt.registerTask('build-prod', [
		'scripts-prod',
		'styles-prod'
	]);

	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-watch');
};