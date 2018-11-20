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
					'./website/wp-content/themes/stagbarbershop/public/js/site.js': './website/wp-content/themes/stagbarbershop/assets/scripts/index.js'
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
					'./website/wp-content/themes/stagbarbershop/style.css': './website/wp-content/themes/stagbarbershop/assets/styles/index.scss'
				}
			}
		},

		postcss: {
			options: {
				processors: [
					require('autoprefixer')({
						browsers: ['last 2 versions']
					})
				]
			},
			dist: {
				src: './website/wp-content/themes/stagbarbershop/css/style.css'
			}
		},

		watch: {
			css: {
				files: ['./website/wp-content/themes/stagbarbershop/assets/styles/**/*.scss'],
				tasks: 'sass'
			},
			js: {
				files: ['Gruntfile.js', './website/wp-content/themes/stagbarbershop/assets/scripts/**/*.js'],
				tasks: 'browserify'
			}
		}
	});

	grunt.registerTask('scripts', [
		'browserify'
	]);

	grunt.registerTask('styles', [
		'sass',
		'postcss'
	]);

	grunt.registerTask('build', [
		'scripts',
		'styles'
	]);

	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-watch');
};