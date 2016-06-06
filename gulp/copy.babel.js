import gulp from 'gulp';

gulp.task('copy', ['copy:jquery', 'copy:fonts', 'copy:extras']);

gulp.task('copy:jquery', () => {
  return gulp.src([
    './src/bower_components/jquery/dist/jquery.min.js',
    './src/bower_components/jquery/dist/jquery.min.map'
  ])
    .pipe(gulp.dest('./public/js/vendor'));
});

gulp.task('copy:fonts', () => {
  return gulp.src('./src/fonts/font-awesome/*.{eot,svg,ttf,woff,woff2}')
    .pipe(gulp.dest('./public/fonts/font-awesome'));
});

gulp.task('copy:extras', () => {
  return gulp.src([
    'src/*.*'
  ], {
    dot: true
  })
  .pipe(gulp.dest('./public'));
});
