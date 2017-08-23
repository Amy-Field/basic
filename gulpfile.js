var gulp = require('gulp'),
    gulpSass = require('gulp-sass'),
    browserSync = require('browser-sync').create();

var original = 'static/';
var output = 'dist/';

gulp.task('script', function(){
    gulp.src(original+'js/*.js')
        .pipe(gulp.dest(output+'js'))
        .pipe(browserSync.stream());

});

gulp.task('style', function(){
    gulp.src(original+'css/main.scss')
        .pipe(gulpSass())
        .pipe(gulp.dest(output+'css'))
        .pipe(browserSync.stream());
});

gulp.task('images', function () {
    gulp.src(original+'images/**')
        .pipe(gulp.dest(output+'images'));
});

gulp.task('serve', function () {
    browserSync.init({
        server: "dist/"
    });
    gulp.watch(original+'js/*.js', ['script']);
    gulp.watch(original+'css/*.scss', ['style']);
    gulp.watch(original+'images/**', ['images']);
    gulp.watch("dist/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['script','style','images','serve']);
