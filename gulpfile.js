'use strict';

var gulp         = require('gulp');
var del          = require('del');
var gutil        = require('gulp-util');
var concat       = require('gulp-concat');
var clientlibify = require('gulp-clientlibify');

gulp.task('clean', function() {
    //return del(['dist']);
	 return del(['dist/scripts', 'dist/styles', 'dist/images', 'dist/*.zip']);
});

gulp.task('scripts', function() {
  return gulp.src('build/static/js/**/*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/scripts'));
});

gulp.task('styles', function() {
  return gulp.src('build/static/css/**/*.css')
    .pipe(concat('main.css'))
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('images', function() {
  return gulp.src('build/static/media/**/*.svg')
    .pipe(gulp.dest('dist/images'));
});

gulp.task('clientlibify', ['scripts','styles','images'], function() {
    return gulp.src('dist/**/*')
        .pipe(clientlibify({
            dest: 'dist',
            jsDir: 'dist/scripts',
			cssDir: 'dist/styles',
			assetsDirs: ['dist/images'],
			
            // set `installPackage` to `true` to deploy to an AEM instance
            installPackage: false,

            categories: ['react'],
            embed: [],
            dependencies: ['cq-jquery'],

            // package options
            packageName: 'react-spa-package',
            packageVersion: '2.1',
            packageGroup: 'My React App - SPA',
            packageDescription: 'CRX package installed using the gulp-clientlibify plugin',

            // deploy options
            // Note: these options would likely come from environment vars
            deployScheme: 'http',
            deployHost: 'localhost',
            deployPort: '4502',
            deployUsername: 'admin',
            deployPassword: 'admin'
        }))
        .pipe(gulp.dest('dist'))
});

gulp.task('default', ['clean', 'clientlibify']);