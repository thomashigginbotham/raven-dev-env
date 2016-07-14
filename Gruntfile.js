module.exports = function (grunt) {
	'use strict';

	// Configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		clean: {
			dev: ['.tmp'],
			dist: ['.tmp', 'dist']
		},
		copy: {
			dist: {
				files: [
					{
						expand: true,
						cwd: 'app/fonts',
						src: ['**'],
						dest: 'dist/fonts'
					}, {
						expand: true,
						cwd: 'app',
						src: ['*.{png,ico,svg}', 'browserconfig.xml', 'manifest.json'],
						dest: 'dist'
					}
				]
			}
		},
		connect: {
			dev: {
				options: {
					port: 9090,
					base: ['.tmp', 'app'],
					open: 'http://localhost:9090/index.html',
					livereload: true
				}
			}
		},
		imagemin: {
			dist: {
				options: {
					optimizationLevel: 3
				},
				files: [
					{
						expand: true,
						cwd: 'app/images',
						src: ['**/*.{png,jpg,gif}'],
						dest: 'dist/images'
					}
				]
			}
		},
		processhtml: {
			dev: {
				files: [
					{
						expand: true,
						cwd: 'app',
						src: ['*.html'],
						dest: '.tmp',
						ext: '.html'
					}
				],
				options: {
					recursive: true
				}
			},
			dist: {
				files: [
					{
						expand: true,
						cwd: 'app',
						src: ['*.html'],
						dest: 'dist',
						ext: '.html'
					}
				],
				options: {
					recursive: true
				}
			}
		},
		sass: {
			dev: {
				options: {
					sourcemap: 'inline',
					style: 'expanded'
				},
				files: {
					'.tmp/css/main.css': 'app/scss/main.scss'
				}
			},
			dist: {
				options: {
					sourcemap: 'inline',
					style: 'compressed'
				},
				files: {
					'dist/css/main.min.css': 'app/scss/main.scss'
				}
			}
		},
		uglify: {
			options: {
				sourceMap: true,
				sourceMapIncludeSources: true,
				screwIE8: true
			},
			dist: {
				files: {
					'dist/js/scripts.min.js': ['app/js/scripts.js']
				}
			}
		},
		watch: {
			html: {
				files: ['app/*.html', 'app/templates/**/*.html'],
				tasks: ['processhtml:dev'],
				options: {
					spawn: false,
					livereload: true
				}
			},
			sass: {
				files: ['app/scss/**/*.scss'],
				tasks: ['sass:dev'],
				options: {
					spawn: false,
					livereload: true
				}
			},
			js: {
				files: ['app/js/**/*'],
				options: {
					livereload: true
				}
			}
		}
	});

	// Tasks

	// Use the default task to create a "dist" directory with optimized files
	grunt.registerTask('default', [], function () {
		[
			'grunt-contrib-clean',
			'grunt-contrib-copy',
			'grunt-contrib-imagemin',
			'grunt-contrib-sass',
			'grunt-contrib-uglify',
			'grunt-processhtml'
		].forEach(grunt.loadNpmTasks);

		grunt.task.run('clean:dist', 'copy:dist', 'sass:dist', 'uglify:dist', 'processhtml:dist', 'imagemin:dist');
	});

	// Use the "serve" task to start a local server with live reload support
	grunt.registerTask('serve', [], function () {
		[
			'grunt-contrib-clean',
			'grunt-contrib-connect',
			'grunt-contrib-sass',
			'grunt-contrib-watch',
			'grunt-processhtml'
		].forEach(grunt.loadNpmTasks);

		grunt.task.run('clean:dev', 'sass:dev', 'processhtml:dev', 'connect:dev', 'watch');
	});
};
