好了，现在进行第三部分，在项目中使用es6语法，我对es6语法的使用也就那么几个，但es6用起来有些东西方便很多，但是部分浏览器不支持es6的语法，但是我们相用，怎么办？
#### babel！
什么是babel，它是个转码器，可以将ES6代码转移为es5代码，就可以在浏览器上运行你的代码。
#### 初级入门
官网：https://babeljs.cn/
阮一峰教程：http://www.ruanyifeng.com/blog/2016/01/babel.html?20170213113809
五分钟阅读结束
先下个babel-cli来测试下
npm install babel-cli --save-dev -g
babel-cli的意思是让你在命令行里使用，cli就是命令行的意思，使用方法和webpack一样，
npm install babel-cli --save-dev -g
babel -V
显示版本

![](./_image/2018-05-28-16-30-45.jpg)

babel 入口文件 出口文件
出口文件出来的就是经过babel编译后的es5语法的js代码
但是我们即想用webpack，又想用babel怎么办，webpack的强大之处来了，我也是小白，百度查一个

![](./_image/2018-05-28-16-12-52.jpg)

点进去查看复制模块部分module
```
module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
      path: __dirname + '/build',
      filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    watch: true
}
```
babel-cli和babel-loader的区别在哪里，其实差不多，就好比在地下跑的是地铁，在地上跑的是火车。其实他们本质上一样，babel-loader是在webpack里跑。
npm install babel-loader --save-dev
出现警告，说要下载 核心babel-core
npm install babel-core --save-dev
```
  "devDependencies": {
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.4",
    "webpack": "^3.8.1"
  }
```
现在你可以放心大胆的用es6了，但是还没完，你除了安装babel-loader外还要安装附属的东西。
什么是附属的东西呢？
比如你的babel-loader是最新版本的，但是我要给ie6兼容啊
所以我要给babel写配置文件，告诉babel我编译出的文件支持ie6
so 我们在项目文件中创建 .babelrc.json，那么，什么是.babelrc.json呢
.babelrc的作用就是告诉babel，你编译出的文件应该符合什么标准，兼容到哪里去 
"presets"预设什么版本，支持的那个版本
```
{
    "presets": [
        "env"
    ]
}
```
>ps：2017年第三季度之后“es2015”就不在支持
>在过去，Babel 将 babel-preset-es2015  放在 babel/babel 的主仓库中进行维护，而 babel-preset-env 则独立为一级项目，这从某种程度上也显示出 Babel 官方对这款 preset 的重视程度和更长远的规划。
https://zhuanlan.zhihu.com/p/29506685

除此之外还要安装stage-0，stage-1，stage-2，stage-3，这些都是转码规则，
npm install --save-dev babel-preset-stage-0  babel-preset-stage-1  babel-preset-stage-2  babel-preset-stage-3
babel官方推荐下载babel-polyfill
有什么用？
支持个别不支持es6的浏览器支持es6（没有的我给你加上去）
其实他的意思是支持浏览器还不支持的预设的意思
比如有些浏览器不支持箭头函数，我给你模拟，预设
```
  "devDependencies": {
    "babel-core": "^6.26.3",
    "babel-helpers": "^6.24.1",
    "babel-loader": "^7.1.4",
    "babel-preset-env": "^1.7.0",
    "babel-preset-stage-0": "^6.24.1",
    "babel-preset-stage-1": "^6.24.1",
    "babel-preset-stage-2": "^6.24.1",
    "babel-preset-stage-3": "^6.24.1",
    "webpack": "^3.8.1"
  }
```
其中遇到一个问题，出现冲突，查百度得要删除node_modules，手动删除了下，好难删除，再查，得
npm install -g rimraf
rimraf node_modules
两行命令行解决
再重新下载npm install
ok
你可以愉快的用es6编译啦
总结下：
这章讲述解决开发人员想在webpack里使用es6的痛点。
使用babel

![](./_image/2018-05-28-18-20-24.jpg)
看图就知道，babel需要依赖babel-core,babel-polyfill,plugins(我还没用到plugins)
webpack中需要依赖babel的话要下载babel-loader
要让babel支持ie6浏览器的话，就要配置babel，再在babel里配置env（开发阶段的babel），和stage-0，stage-1，stage-2，stage-3等转移规则
全下载完了就可以编译了
npm install babal-loader babel-polyfill babel-preset-env babel-preset-stage-0 babel-preset-stage-1 babel-preset-stage-2 babel-preset-stage-3
哦了

---------------------------------------
下一章：用gulp管理任务
