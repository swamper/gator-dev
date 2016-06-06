import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import del from 'del';
import requireDir from 'require-dir';

const $ = gulpLoadPlugins();

(() => {
    const requireDir = require('require-dir');

    // require all tasks in gulp/tasks, including sub-folders
    requireDir('./gulp', { recurse: true });
})();

gulp.task('clean', del.bind(null, ['public/js', 'public/css']));

gulp.task('build', ['lint', 'styles', 'copy'], () => {
  return gulp.src('public/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', ['clean'], () => {
  gulp.start('build');
});
