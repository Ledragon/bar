var gulp = require('gulp');
var inject = require('gulp-inject');
var browserSync = require('browser-sync').create();
var config = require('./gulp.config');

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch(['./**/*.html', './app/**/*.js'], browserSync.reload);
});

gulp.task('serve-build', function () {
    gulp.src('app/**/*.html')
    .pipe(gulp.dest('./build/app'));
    browserSync.init({
        server: {
            baseDir: './build'
        }
    });
});

gulp.task('inject', function () {
    return gulp.src('index.html')
        .pipe(inject(gulp.src(config.cssFiles, { read: false })))//css
        .pipe(inject(gulp.src(config.libJsFiles, { read: false }), { name: 'lib' }))//libs js
        //.pipe(inject(gulp.src('app/**/*.js', { read: false })))//own js
        .pipe(gulp.dest('.'))
});

// gulp.task('auto-inject', function () {
//     var src = 'app/**/*.js';
//     var watcher = gulp.watch(src);
//     watcher.on('add', function () {
//         return gulp.src('index.html')
//             .pipe(inject(gulp.src('app/**/*.js', { read: false })))//own js
//             .pipe(gulp.dest('.'));
//     });
// 
// })