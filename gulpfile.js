
const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const htmlminify = require("gulp-html-minify");
var   tinyPNG = require("gulp-tinypng-compress");
const del = require('del');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();

//Порядок подключения css файлов
const cssFiles = [
   './src/css/main.css'
]
//Порядок подключения js файлов
const jsFiles = [
   './src/js/slick.min.js',
   './src/js/wow.min.js',
   './src/js/jquery.validate.min.js',
   './src/js/jquery.maskedinput.min.js',
   './src/js/main.js'
]

//Таск на стили CSS
function styles() {
   //Шаблон для поиска файлов CSS
   //Все файлы по шаблону './src/css/**/*.css'
   return gulp.src(cssFiles)
   //Объединение файлов в один
   .pipe(concat('main.css'))
   //Минификация CSS
   .pipe(cleanCSS({
      level: 2
   }))
   //Выходная папка для стилей
   .pipe(gulp.dest('dist/css'))
   .pipe(browserSync.stream());
}


// доп задание по 24 уроку - временная секция
// ==========================================
function minjs() {
   //Шаблон для поиска файлов JS
   //Все файлы по шаблону './src/js/**/*.js'
   return gulp.src(['./src/js/*.js' ,'!./**/*.min.js'])
   //Минификация JS
   .pipe(uglify({
      toplevel: true
   }))
  // добавляем префикс .min 
    // .pipe(rename({
    //   suffix: '.min'
    // })) 

   //Выходная папка для скриптов
   .pipe(gulp.dest('dist/js'))
   .pipe(browserSync.stream());
}
 
function movejs() {
   //Шаблон для поиска файлов JS
   //Все файлы по шаблону './src/js/**/*.min.js'
   return gulp.src('./src/js/*.min.js')
   // переносим файлы формата .min.js
   .pipe(gulp.dest('dist/js'))
 }

//Таск вызывающий функцию minjs
gulp.task('minjs', minjs);
//Таск вызывающий функцию movejs
gulp.task('movejs', movejs);
//Таск вызывающий выполняющий minjs и movejs
gulp.task('removejs', gulp.series('minjs','movejs'));

// ====================================================


//Таск на скрипты JS
function scripts() {
   //Шаблон для поиска файлов JS
   //Все файлы по шаблону './src/js/**/*.js'
   return gulp.src(jsFiles)
   // Объединение файлов в один
   .pipe(concat('main.js'))
   //Минификация JS
   .pipe(uglify({
      toplevel: true
   }))
   //Выходная папка для скриптов
   .pipe(gulp.dest('dist/js'))
   .pipe(browserSync.stream());
}
// переносим шрифты
function movefonts() {
  return gulp.src('./src/fonts/**/*')
    .pipe(gulp.dest('dist/fonts/'))

};
// минимизируем изображения
function tiny(done) {
  return gulp.src('./src/img/**/*.{png,jpg,jpeg}')
        .pipe(tinyPNG({
            key: 'wXT8OpW5DOVTE9rJSA5gIWrkTrfycjnl'
        }))
        .pipe(gulp.dest('dist/img'))

	done();      
};
// Минимизируем HTML
function minifyHTML() {
  return gulp.src('./src/index.html')
 		// .pipe(htmlminify())
    .pipe(gulp.dest('dist/'))

}

//Удалить всё в указанной папке
function clean() {
   return del(['dist/*'])
}

//Просматривать файлы
function watch() {
   browserSync.init({
      server: {
          baseDir: "src/",
          index: "index.html"

      }
  });
  //Следить за CSS файлами
  gulp.watch('./src/css/**/*.css', styles)
  //Следить за JS файлами
  gulp.watch('./src/js/**/*.js', scripts)
  //При изменении HTML запустить синхронизацию
  gulp.watch("./src/index.html").on('change', browserSync.reload);
}

//Таск вызывающий функцию styles
gulp.task('styles', styles);
//Таск вызывающий функцию scripts
gulp.task('scripts', scripts);
//Таск для минимизации изображений
gulp.task('tiny', tiny);
//Таск для переноса шрифтов
gulp.task('movefonts', movefonts);
//Таск для минимизации файла html
gulp.task('minifyHTML', minifyHTML);
//Таск для очистки папки build
gulp.task('del', clean);
//Таск для отслеживания изменений
gulp.task('watch', watch);
//Таск для удаления файлов в папке build и запуск styles и scripts
gulp.task('build', gulp.series(clean, gulp.parallel(styles,minjs,movejs,movefonts,minifyHTML,tiny)));
//Таск запускает таск build и watch последовательно
gulp.task('dev', gulp.series('build','watch'));





