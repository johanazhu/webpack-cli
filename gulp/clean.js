/**
 * Created by Johan on 2018/6/1.
 */

module.exports = function (gulp, $) {
    gulp.task('clean:build', function() {
        return gulp.src('./build')
            .pipe($.clean());
    })
}