var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
$.babel = require('gulp-babel');
$.concat = require('gulp-concat');
$.plumber = require('gulp-plumber');
$.jshint = require('gulp-jshint');
$.uglify = require('gulp-uglify');
$.size = require('gulp-size');
$.browserSync = require('browser-sync').create();

var jsSrc = './src/carousel-slider.js',
    jsDst1 = './dist/',
    jsDst2 = './show/';

module.exports = function () {
  return gulp.src(jsSrc)
    .pipe($.plumber({
      errorHandler: function (err) {
        console.log(err);
        this.emit('end');
      }
    }))
    .pipe($.jshint())
    .pipe($.jshint.reporter('default'))
    .pipe($.babel({ presets: ['es2015'] }))
    .pipe($.concat('cls.min.js'))
    .pipe($.uglify())
    .pipe($.size({title: 'JS'}))
    .pipe(gulp.dest(jsDst1))
    .pipe(gulp.dest(jsDst2))
    .pipe($.browserSync.stream());
};
