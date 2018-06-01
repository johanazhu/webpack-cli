/**
 * Created by Johan on 2018/5/29.
 */

let gulp = require('gulp')
let $ = require('gulp-load-plugins')()

let runSequence = require('run-sequence')
let fs = require('fs')



fs.readdirSync('./gulp').forEach((file) => {
    require('./gulp/' + file)(gulp, $);
})




gulp.task('dev',(done)=>{
    runSequence(
        ['server'],
        ['webpack'],
        done
    )
})

gulp.task('build',(done)=>{
    runSequence(
        ['clean:build'],
        ['webpack:build'],
        done
    )
})










