var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
$.image = require('gulp-image');
$.imagemin = require('gulp-imagemin');
$.size = require('gulp-size');
$.browserSync = require('browser-sync').create();

var imgSrc = './src/assets/imgs/**/*',
    imgDst = './show';

module.exports = function () {
    return gulp.src(imgSrc)
      .pipe($.image())
      .pipe($.imagemin())
      .pipe($.size({title: 'IMG'}))
      .pipe(gulp.dest(imgDst))
      .pipe($.browserSync.stream());
};