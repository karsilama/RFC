var gulp = require('gulp');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('watch', function(){
	gulp.watch('./src/styles/less/**/*.less', reload);
	gulp.watch('./src/*.html').on('change', reload);
	gulp.watch('./src/app/**/**/**/*').on('change', reload);
	gulp.watch('./src/pages/*').on('change', reload);
});

gulp.task('less', function() {
    gulp.src('./src/styles/less/**/*.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(concat('bundle.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./src/styles/css'));
});

gulp.task('serve', ['less'], function(){
	browserSync({
		server:{
			baseDir: ['./src'],
      routes : {
        '/bower_components' : 'bower_components'
      }
		}
	});
  gulp.start('watch');
});

gulp.task('default', ['serve', 'less', 'watch']);
