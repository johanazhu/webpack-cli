现在进入gulp阶段，卧槽，我竟然连续写了三天，不了的。
webpack+es6+gulp+vue，现在进入gulp部分。
为什么要用任务管理，现在用的任务就只有webpack，但以后还有会很多任务，为了方便管理，就要任务管理。网上最流行的任务管理是gulp
gulp——用自动化构建工具增强你的工作流程
安装官网提示，
安装到全局
```
npm install -g gulp
```
再安装到开发依赖中
```
npm install gulp --save-dev
```
在根目录创建gulpfile.js，写
```
var gulp = require('gulp');
gulp.task('default', function(){
    console.log(">hello world")
})
```
命令行里敲 gulp

![](./_image/2018-05-29-15-36-18.jpg)
其实gulp入门很简单，完全看的懂。
管理任务了，默认任务是default，我们现在想开个服务，不想再本地上运行。用gulp-connect。
```
npm install gulp-connect --save-dev
```
```
gulp.task('server', function(){
    connect.server({
        root: './',
        port: 9005
    })
})
```
起server了
那么我们是不是可以在gulp里起webpack呢。答案是ok
webpack-stream,webpack-stream是一个流，处理webpack，给gulp用的
打个比方，就好比babel，babel有babel-cli，babel-loader,babel-core,babel-cli使用于命令行，babel-loader适用于webpack。
说白了，webpack-stream是webpack针对gulp的产品。
webpack-stream适用于gulp，它把webpack做成了流，在gulp里使用。
```
let gulp = require('gulp');
let connect = require('gulp-connect')
let webpackStream = require('webpack-stream')
let webpack = require('webpack')

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
```
不知道你们看的懂不懂

![](./_image/2018-05-29-16-19-27.jpg)
pipe是管道，就是进入app.js这个文件，通过webpackStream来编译webpack，输出到dev这个文件。
如果我想即开服务，又开webpack，两个任务都做怎么办
安装run-sequence
cnpm i run-sequence --save-dev
```
gulp.task('dev',(done)=>{
    runSequence(
        ['server'],
        ['webpack'],
        done
    )
})
```
命令行 gulp dev
完成
睡觉睡觉
困死了
下一节，继续搭建
