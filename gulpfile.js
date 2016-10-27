var gulp = require('gulp'),
		jshint = require('gulp-jshint')
		stylish = require('jshint-stylish'),
		less = require('gulp-less'),
		sourcemaps = require('gulp-sourcemaps'),
		concat = require('gulp-concat'),
		browserSync = require('browser-sync'),
		reload = browserSync.reload;

gulp.task('jshint', function(){
	return gulp.src('./src/app/**/**/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter(stylish))
}) ;

gulp.task('watch', function(){
	gulp.watch('./src/styles/less/**/*.less', reload);
	gulp.watch('./src/*.html').on('change', reload);
	gulp.watch('./src/app/**/**/**/*').on('change', reload);
	gulp.watch('./src/pages/**/*').on('change', reload);
});

gulp.task('less', function() {
    return gulp.src('./src/styles/less/**/*.less')
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
