import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import cleanCSS from 'gulp-clean-css';

const $ = gulpLoadPlugins();


gulp.task('styles-min', () => {
  return gulp.src('./src/css/main.css')
    .pipe($.plumber())
    .pipe(cleanCSS())
    .pipe(gulp.dest('./public/css'))
});
