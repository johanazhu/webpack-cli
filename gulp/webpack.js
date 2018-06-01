/**
 * Created by Johan on 2018/6/1.
 */
let webpackStream = require('webpack-stream')
let webpack = require('webpack')

module.exports = function (gulp) {
    gulp.task('webpack',()=>{
        return gulp.src('./src/app.js')
            .pipe(webpackStream(require('../conf/webpack.dev'), webpack))
            .pipe(gulp.dest('./dev'));
    })

    gulp.task('webpack:build',()=>{
        return gulp.src('./src/app.js')
            .pipe(webpackStream(require('../conf/webpack.build'), webpack))
            .pipe(gulp.dest('./build'));
    })
}
