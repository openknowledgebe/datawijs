'use strict';

var gulp = require('gulp');
var open = require('gulp-open');
var connect = require('gulp-connect');
var sass = require('gulp-sass');

var dist = './';

gulp.task('default', ['live', 'watch']);

gulp.task('live', ['reload'], function() {
  connect.server({
    port: 1337,
    livereload: true
  });
  gulp.src('index.html')
    .pipe(open('', {
      url: 'http://localhost:1337'
    }));
});

gulp.task('run', ['reload'], function() {
  var d = new Date();
  console.log('\n  ' + d.getHours() + ':' + ('0' + d.getMinutes()).slice(-2) + ':' + ('0' + d.getSeconds()).slice(-2) + '\n');
});

gulp.task('reload', ['sass'], function() {
  return gulp.src(dist + 'index.html')
    .pipe(connect.reload());
});

gulp.task('sass', function () {
  gulp.src('css/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
  gulp.src('css/default.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
  gulp.watch(['css/index.scss','css/default.scss'], ['run']);
});