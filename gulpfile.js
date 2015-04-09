var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('reload', function() {
	browserSync.reload();
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: '.'
        }
    });
});

gulp.task('watch', function () {
    gulp.watch(['**/*.html', 'app.js', 'plangular.js'], ['reload']);
});

gulp.task('default', ['browser-sync', 'watch']);