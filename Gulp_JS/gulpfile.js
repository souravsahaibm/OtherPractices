// const { require } = require("gulp-cli/lib/shared/cli-options");

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minify = require('gulp-uglify');
const concat = require('gulp-concat');
// const watch=require('gulp');

// To avoid error "Did you forget to signal async completion?" need to use async before callback function
gulp.task('message', async function () {
    return console.log('My first gulp messsage');
});

gulp.task('copy-css', function () {
    return gulp.src('src/*.css')
        .pipe(gulp.dest('dest/css'));
});

gulp.task('copy-js', function () {
    return gulp.src('src/copy.js')
        .pipe(gulp.dest('dest/js'));
});

// compile .scss to .css using sass plugin
gulp.task('sass', function () {
    return gulp.src('src/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dest/sass'));
});

//Uglify/minify a js file using gulp-uglify plugin
gulp.task('minify', function () {
    return gulp.src('src/js/main.js')
        .pipe(minify())
        .pipe(gulp.dest('dest/minify'));
});

//concat 2 files content into 1 file using gulp-concate
gulp.task('concate', function () {
    return gulp.src('src/js/*.js')
        .pipe(concat('concate.js'))
        .pipe(gulp.dest('dest/concate'));
});

//do concate and minify in one task
gulp.task('concate-uglify', function () {
    return gulp.src('src/js/*.js')
        .pipe(concat('concate.js'))
        .pipe(minify())
        .pipe(gulp.dest('dest/concate'));
});

//automate gulp tasks using gulp watch function
gulp.task('watch', function () {
    gulp.watch(['src/sass/*.scss'], gulp.series('sass'));
    gulp.watch(['src/js/main.js'], gulp.series('minify'));
});

//Gulp Default tasks
gulp.task('task1', async () => {
    return console.log('This is task1');
});
gulp.task('task2', async () => {
    return console.log('This is task2');
});
gulp.task('task3', async () => {
    return console.log('This is task3');
});
// gulp.task('default', gulp.series('task1', 'task2', 'task3'));
gulp.task('default', gulp.parallel('task1', 'task2', 'task3'));