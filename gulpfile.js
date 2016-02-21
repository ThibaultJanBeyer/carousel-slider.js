// include gulp
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
plugins.browserSync = require('browser-sync').create();

// Individual tasks
gulp.task('img', require('./gulp-tasks/img'));
gulp.task('javascript', require('./gulp-tasks/javascript'));
gulp.task('clean', require('./gulp-tasks/clean'));
gulp.task('sass', require('./gulp-tasks/sass'));
gulp.task('movings', require('./gulp-tasks/movings'));
gulp.task('watch', require('./gulp-tasks/watch'));
gulp.task('html', require('./gulp-tasks/html'));

// Globs
gulp.task('cln', ['clean']);
gulp.task('devl', ['html', 'img', 'sass', 'javascript', 'movings', 'watch']);
gulp.task('build', ['html', 'img', 'sass', 'javascript', 'movings']);
gulp.task('serve', ['html', 'img', 'sass', 'javascript', 'movings', 'watch'], function () {
    plugins.browserSync.init({
        server: "./show"
    });
    gulp.watch('./show/**/*').on('change', plugins.browserSync.reload);
});

// Default task
gulp.task('default', ['devl']);