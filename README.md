# webpack-cli
此项目是自己从零开始搭建强迫症版webpack脚手架，项目是从零开始，再写的同时也是对自己webpack，vue，es6，gulp知识的一种梳理。
## 第一步
注册github账号，并创立项目，接着按照github 的提示，再本地git bash中输入
****
    echo "# webpack-cli" >> README.md
    git init
    git add README.md
    git commit -m "first commit"
    git remote add origin git@github.com:johanazhu/webpack-cli.git
    git push -u origin master

****
![](./_image/2018-05-27-10-12-45.jpg)
---------------------------------------
## 第二步
在git bash中 输入 npm init
****
![](./_image/2018-05-27-10-41-36.jpg)
这样就有了pageage.json文件，此文件相当于一个清单，里面是你要在下载的文件的名字和版本
> 打个比方：你妈让你去买菜，买三斤五花肉，四斤蔬菜，5个苹果，你可以买一个回来，再买一个回来，来回要三趟，但是你如果有个清单，你就不用来回跑三趟。
你下个jquery@3.3.1(好比三斤五花肉)，npm install jqeury@3.3.1 --save
****
```
npm install jquery --save   发布模式——build
npm install webpack --save-dev 开发模式——dev
```
## 第三步
创建src，js，css文件夹，在根目录创建index.html，在src目录创建app.js
在命令行里输入 npm install jquery --save(我们上线版本要用到jqeury，故用--save)，你会在package.json里看到
```
 "dependencies": {
    "jquery": "^3.3.1"
 }
```
根目录里也多了一个node_modules 文件
因为我的webpack之前全局安装过,所以我现在先卸载
npm uninstall webpack -g
接在在项目中重新安装,因为weback是在开发的时候用到,所以命令行里应该写:
```
npm install webpack --save-dev -g
ps: npm install webpack@3.8.1 --save-dev(@3.8.1为此npm的版本)
pss: 如果npm下载太慢,可以换成cnpm,换源自行百度
```
```
"dependencies": {
    "jquery": "^3.3.1"
},
"devDependencies": {
    "webpack": "^3.8.1"
}
```
## 第四步
准备工作到此告一段落,接下来就是测试webpack是否已经运行.在index.html里
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>webpack-cli</title>
    <meta name="description" content="">
    <meta name="keywords" content="">
    <link href="" rel="stylesheet">
</head>
<body>
    <button class="btn">点我</button>
    <script src="build/app.js"></script>
</body>
</html>
```
在app.js里引入jquery,
```
import $ from 'jquery'

$(".btn").click(function(){
    console.log($);
})
```
命令行里写:
webpack 入口文件 出口文件
```
webpack ./src/app.js ./build/app.js
```
本来build文件和app.js是没有的,输出build/app.js后,index.html引入,你可以看看build/app.js里的代码,已经被webpack编译好了
## 完成
最简单的webpack-cli已经完成
提交到github上,不过做这部之前你还要做两件事
### 先配置git的别名
```
$ git config --global alias.co checkout
$ git config --global alias.br branch
$ git config --global alias.ci commit
$ git config --global alias.st status
```
### 再创建.gitignore忽略文件
作用:忽略的文件夹及其文件
在命令行中输入
git st(看下舞台上有什么文件)
git add -A (提交所有文件)





