/**
 * Created by Johan on 2018/5/29.
 */

let gulp = require('gulp');
let connect = require('gulp-connect')
let webpackStream = require('webpack-stream')
let webpack = require('webpack')
let runSequence = require('run-sequence')

gulp.task('server', function(){
    connect.server({
        root: './',
        port: 9005
    })
})

gulp.task('webpack',()=>{
    return gulp.src('./src/app.js')
        .pipe(webpackStream(require('./webpack.config'), webpack))
        .pipe(gulp.dest('./dev'));
})

gulp.task('dev',(done)=>{
    runSequence(
        ['server'],
        ['webpack'],
        done
    )
})
