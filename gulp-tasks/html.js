var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
$.htmlhint = require("gulp-htmlhint");
$.htmlmin = require('gulp-htmlmin');
$.plumber = require('gulp-plumber');
$.size = require('gulp-size');
$.browserSync = require('browser-sync').create();

var htmlSrc = './src/*.html',
  htmlDst = './docs';

module.exports = function () {
  return gulp.src(htmlSrc)
    .pipe($.plumber({
      errorHandler: function (err) {
        console.log(err);
        this.emit('end');
      }
    }))
    .pipe($.htmlhint())
    .pipe($.htmlmin({
      collapseWhitespace: true
    }))
    .pipe($.size({
      title: 'HTML'
    }))
    .pipe(gulp.dest(htmlDst))
    .pipe($.browserSync.stream());
};
