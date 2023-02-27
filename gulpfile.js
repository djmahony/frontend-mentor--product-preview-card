const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('styles', () => {
    return gulp.src('./assets/src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css/'));
});

gulp.task('styles:watch', () => {
    gulp.watch('assets/src/scss/**/*.scss', (done) => {
        gulp.series('styles')(done);
    })
})

gulp.task('default', gulp.series('styles:watch'));