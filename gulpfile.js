var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var lr;

var EXPRESS_PORT = 4000;
var EXPRESS_ROOT = __dirname + '/src';
var LIVERELOAD_PORT = 35729;

function startExpress() {
  var express = require('express');
  var app = express();
  var connectLiveReload = require('connect-livereload');
  app.use(connectLiveReload());
  app.use( "/bower_components", express.static( __dirname + "/bower_components" ) );
  app.use(express.static(EXPRESS_ROOT));
  app.listen(EXPRESS_PORT, function(){
    console.log("Listen http://localhost:" + EXPRESS_PORT)
  });
}

function notifyLivereload(event) {
  var fileName = require('path').relative(EXPRESS_ROOT, event.path);

  lr.changed({
    body: {
      files: [fileName]
    }
  });
}

function startLivereload() {
  lr = require('tiny-lr')();
  lr.listen(LIVERELOAD_PORT);
}

gulp.task('serve', function () {
  startExpress() ;
  startLivereload() ;
});

gulp.task('reload', function () {
  watch( './src/styles/scss/**/*.scss', notifyLivereload);
  watch( './src/*.html', notifyLivereload);
  watch( './src/app/**/**/**/*', notifyLivereload);
  watch( './src/pages/*', notifyLivereload);
});

gulp.task('sass', function() {
  watch( './src/styles/scss/**/*.scss', function() {
    gulp.src('./src/styles/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(concat('bundle.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./src/styles/css'));
  } );
});

gulp.task('default', ['serve', 'sass', 'reload']);
