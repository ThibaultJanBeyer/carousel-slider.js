var gulp = require('gulp');

var mSrc = './src/carousel-slider.js',
    mDst1 = './show/',
    mDst2 = './dist/';

module.exports = function () {
   return gulp.src(mSrc)
   .pipe(gulp.dest(mDst2))
   .pipe(gulp.dest(mDst1));
};