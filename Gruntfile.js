module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		srcDir: 'website/assets/',
		distDir: 'website/public/',
		jsSrc: '<%= srcDir %>scripts/**/*.js',

		modernizr: {
			dist: {
				'crawl': false,
				'customTests': [],
				'dest': 'website/public/js/modernizr.js',
				'tests': [
					'touchevents'
				],
				'options': [
					'html5shiv',
					'setClasses'
				],
				'uglify': true
			}
		},

		browserify: {
			dist: {
				options: {
					transform: [['babelify', { presets: 'es2015' }]],
					browserifyOptions: {
						debug: true
					},
					exclude: ['jquery'],
					require: ['jquery']
				},
				files: {
					'<%= distDir %>js/site.js': '<%= srcDir %>scripts/site.js'
				}
			}
		},

		uglify: {
			my_target: {
				options: {
					sourceMap: true,
					quoteStyle: 1,
				},
				files: {
					'<%= distDir %>js/site.js': '<%= distDir %>js/site.js'
				}
			}
		},

		sass: {
			options: {
				style: 'compressed'
			},
			dist: {
				expand: true,
				flatten: true,
				files: {
					'<%= distDir %>css/site.css': '<%= srcDir %>styles/site.scss',
					'<%= distDir %>css/mobile.css': '<%= srcDir %>styles/mobile.scss'
				}
			}
		},

		postcss: {
			options: {
				processors: [
					require('autoprefixer') ({
						browsers: ['last 2 versions','ie >= 9','chrome 28']
					})
				]
			},
			dist: {
				src: '<%= distDir %>css/site.css'
			}
		},

		imagemin: {
			dist: {
				static: {
					options: {
						optimizationLevel: 3
					}
				},
				files: [{
					expand: true,
					cwd: '<%= srcDir %>images/',
					src: ['**/*.{png,jpg,gif}'],
					dest: '<%= distDir %>img/'
				}]
			}
		},

		watch: {
			css: {
				files: ['<%= srcDir %>styles/**/*.scss'],
				tasks: ['sass', 'postcss']
			},
			js: {
				files: ['Gruntfile.js', '<%= jsSrc %>'],
				tasks: 'browserify'
			}
		}

	});

	grunt.loadNpmTasks('grunt-modernizr');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-newer');
	grunt.loadNpmTasks('grunt-contrib-watch');
};