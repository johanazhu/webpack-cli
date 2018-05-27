先看README.md,配置简单的文件,代码再
---------------------------------------
接着讲,我可以再index开始我的代码,但是有个问题,我每次要再命令行编译一次,有什么方法吗,价格--watch,变成"webpack ./src/app.js ./build/app.js --watch",但是这个命令行太长了,我不喜欢,怎么做
到package.json的scripts里输入
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack ./src/app.js ./build/app.js --watch"
},
```
dev可以换任何东西,因为dev是开发的意思,所以比较好记,接着你再命令行里输入
npm run dev,效果和"webpack ./src/app.js ./build/app.js --watch"是一样的
这是一种方法(官方推荐,我也会用这种方法写),配置文件.
创建webpack.config.js
```
module.exports = {
    entry: './src/app.js',
    output: {
      path: './build/',
      filename: 'app.js'
    },
    watch: true
}
```
命令行里输入webpack

![](./_image/2018-05-27-13-39-31.jpg)
百度一查

![](./_image/2018-05-27-13-41-29.jpg)
版本问题,添加绝对路径_dirname,再编译,成功.

## 总结下
总结下:webpack的打包一共三种(我目前所知),
一:命令行里输入"webpack ./src/app.js ./build/app.js --watch"
二:再package.json里脚本里输入""dev": "webpack ./src/app.js ./build/app.js --watch"",命令行里输入npm run dev,跑起来
三:配置webpack.config.js文件(官方推荐这种),这种方法能更好的管理你的webpack配置项

---------------------------------------
接着看 README-第三部分-babel编译es6

