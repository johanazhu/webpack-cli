/**
 * Created by Johan on 2018/6/1.
 */

let connect = require('gulp-connect')

module.exports = function (gulp, $) {
    gulp.task('server', function(){
        $.connect.server({
            root: './',
            port: 9005
        })
    })
}
