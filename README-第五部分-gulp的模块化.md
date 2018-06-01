简直要困死，夏天到了为什么会这么困。好了，先回顾一下，前几天发奋写的webpack+es6+gulp不知道自己忘记了没有，初衷很简单，要简便自己以后的开发，又想用到最新颖的技术（webpack的打包啊，babel的es编译为es5啊，gulp的任务流），所以自己动手开发脚手架，边学变写吧。
webpack：超强模块打包机，打包、压缩代码，把复杂的页面模块化，配置好文件就能让他运行起来，运行后它帮你打包压缩代码。
babel：无敌于es6，想写es6，但是浏览器不支持，引入babel，babel会帮你把es6的语法转化为es5的浏览器能识别的能运行的代码。
gulp：简单易学的gulp，你下载gulp后，做个配置文件就可以直接用了，所以很简单，让简单的代码更简单，让复杂的任务可管理。
现在我们已经打通了webpack,babel和gulp，但是有没有发现现在的是dev模式（开发模式），所以我们还要做一版build模式（发布模式）。开搞把
现在上线了，怎么办，要做一个上线的版本，现在只有dev模式，所以要做两版，在根目录下新建conf文件，把webpack.config.js改成webpack.dev.js放入conf文件中，运行代码
```
gulp dev
```
运行成功
复制一份webpack.dev.js，改名webpack.build.js，去掉watch监听
在gulp配置build任务
```
gulp.task('webpack:build',()=>{
    return gulp.src('./src/app.js')
        .pipe(webpackStream(require('./conf/webpack.build'), webpack))
        .pipe(gulp.dest('./build'));
})
```
但是以后任务会越来越多，我们能不能把任务单独摘出去，方便我们管理呢？
创建gulp文件夹，把以后的任务都放到gulp文件里，然后通过NODE.JS中的fs模块把代码导入gulpfile.js中，
在gulp中创建server.js，这个文件就是起到起服务的。
继续在gulpfile.js中引入fs，
```
let fs = require('fs')
fs.readdirSync('./gulp').foreach((file) => {
    require('./gulp/' + file)(gulp);
})
```
server.js中的代码如下
```
let connect = require('gulp-connect')
module.exports = function (gulp) {
    gulp.task('server', function(){
        connect.server({
            root: './',
            port: 9005
        })
    })
}
```
用fs模块中的readdirSync读取gulp文件夹中的每一个文件，并让它执行，这个文件需要gulp，传一个参数就好。
运行代码，gulp dev ，ok
那么现在还有一个问题，我在gulp文件里写子任务，每一次都要引入插件hen 
有没有一种插件能自动把gulp的插件依赖进来呢
当然是有的，
```
npm install gulp-load-plugins --save-dev
```
 这个插件是负责管理gulp插件的插件
在gulpfile.js中引入
```
let $ = require('gulp-load-plugins')()
```
gulp-load-plugins是一个函数，你需要让它执行一下
同理，做出webpack.js，不过注意的一点是，webpack引入webpack和webpackStream即可，他不需要引入gulp，就不必引入gulp-load-plugins

接下来我们再在gulpfile.js里配置build文件
```
gulp.task('dev',(done)=>{
    runSequence(
        ['server'],
        ['webpack'],
        done
    )
})
gulp.task('build',(done)=>{
    runSequence(
        ['webpack:build'],
        done
    )
})
```
我们每次build之前应该干什么呢，应该先把原有的build删掉，所以再安装一个包
```
npm install gulp-clean --save-dev
```
创建clean.js
```
module.exports = function (gulp, $) {
    gulp.task('clean:build', function() {
        return gulp.src('./build')
            .pipe($.clean());
    })
}
```
在gulpfile.js中写
```
gulp.task('build',(done)=>{
    runSequence(
        ['clean:build'],
        ['webpack:build'],
        done
    )
})
```
成功
提交代码
为什么，你知道我为什么把一个服务，一个清除代码，一个本可以在gulp一起写好的东西分开来写，因为希望自己养成拆分代码的习惯





