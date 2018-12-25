var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
$.scsslint = require('gulp-scss-lint');
$.sass = require('gulp-sass');
$.plumber = require('gulp-plumber');
$.autoprefixer = require('gulp-autoprefixer');
$.csso = require('gulp-csso');
$.concat = require('gulp-concat');
$.size = require('gulp-size');
$.browserSync = require('browser-sync').create();

var scssSrc = './src/assets/stylesheets/bundle.scss',
  scssDst = './docs/';

module.exports = function () {
  return gulp.src(scssSrc)
    .pipe($.plumber({
      errorHandler: function (err) {
        console.log(err);
        this.emit('end');
      }
    }))
    .pipe($.scsslint())
    .pipe($.sass())
    .pipe($.autoprefixer())
    //    .pipe($.concat('bundle.css'))
    .pipe($.csso())
    .pipe($.size({
      title: 'SASS'
    }))
    .pipe(gulp.dest(scssDst))
    .pipe($.browserSync.stream());
};
