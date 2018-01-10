# express_gulp_fe

## Descriptions
本地用node启动一个服务，并使用gulp构建项目资源，json-server模拟接口数据，实现项目的前后端分离。


## Available scripts

### `npm run dev`

Runs ths demo in the development mode.

### `npm run pre`

Builds the demo for production to the `dist` folder.


## devDependencies

#### `browser-sync`
当改变代码时，BrowserSync会重新加载页面，若是css文件，会直接添加进css中，页面并不需要再次刷新。<br>

也可以用于静态页面，BrowserSync将启动一个小型服务器，并提供一个URL来查看。

#### `gulp-clean`
删除文件夹及文件。

#### `gulp-clean-css`
压缩并清理css文件。

#### `gulp-cssimport`
引入css文件中的import语句中，对应的文件的样式。

#### `gulp-nodemon`
检测server.js所在目录下的文件，若有改变，就会自动重新启动server.js。

#### `gulp-replace`
替换相应内容。

#### `gulp-rev`
根据文件内容生成md5戳，并替换文件。
eg：main.css ---> main-3ed1041615.css

  rev.manifest()<br>
  会生成一个rev-manifest.json文件，内容为源文件名和加戳文件名的映射。

#### `gulp-rev-collector`
通过manifest文件，将html中引用的文件名替换为加戳后的文件。

#### `require-dir`
node的工具，可以将文件夹下的文件都require进来。
可用来管理gulp的tasks。

#### `run-sequence`
gulp默认使用最大并发数执行任务，即所有任务几乎都是同时执行，但有时任务是需要有先后次序的，比如要先清理目标目录，然后执行打包。<br>
run-sequence就是控制多个任务进行顺序执行或者并行执行。


## tasks

#### `server`
启动服务并监听server.js，gulpfile.js。
文件修改后网页实时刷新。

#### `clean`
删除dist文件夹。

#### `combineCss`
压缩和推送css文件。

#### `combineJs`
推送Js文件。

#### `combineImgs`
推送img文件。

#### `revCss`
生成带有md5戳的css文件推送到dist。

#### `revJs`
生成带有md5戳的js文件推送到dist。

#### `mvHtmlSource`
推送html文件。

#### `revCollector`
将dist的html文件中的css和js的文件名，替换为加戳的文件名。

#### `adjuct_manifest_css`
将对应的rev_manifest.json文件中的目录替换成线上需要的目录。
