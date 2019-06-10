
let gulp = require('gulp');
let cleanCSS = require('gulp-clean-css');
let  htmlminify = require("gulp-html-minify");
let  tinypng = require("gulp-tinypng-compress");

function defaultTask(done) {
	console.log('Все работает');
	done();
}

gulp.task('minifyCSS', function(done) {
  return gulp.src('./src/css/*.css')
  	.pipe(cleanCSS({level: 2}))
    .pipe(gulp.dest('dist/css/'))


  done();
});

gulp.task('minifyHTML', function(done) {
  return gulp.src('./src/index.html')
 		.pipe(htmlminify())
    .pipe(gulp.dest('dist/'))


  done();
})

gulp.task('tinyPNG', function (done) {
    gulp.src('./src/img/**/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: 'wXT8OpW5DOVTE9rJSA5gIWrkTrfycjnl',
        }))
        .pipe(gulp.dest('dist/img'));

   done();     
});

gulp.task('moveJS', function(done) {
  return gulp.src('./src/js/*.js')
    .pipe(gulp.dest('dist/js/'))


  done();
});

gulp.task('moveFONTS', function(done) {
  return gulp.src('./src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts/'))


  done();
});

gulp.task('default', gulp.parallel('minifyCSS', 'tinyPNG', 'minifyHTML' ,'moveJS','moveFONTS', function(done) {

	done();
}));
