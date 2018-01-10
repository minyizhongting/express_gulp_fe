var fs = require('fs');
var path = require('path');
var config = require('./gulp/config');

var jsonServer = require('json-server');
var server = jsonServer.create();	//Returns an Express server
// var router = jsonServer.router('data.json');	//Returns an Express router
var middlewares = jsonServer.defaults();	//logger, static and cors middlewares

//将模拟的一堆json文件合并成一个
var data = {};
var jsonfolder = __dirname + config.mock;
var files = fs.readdirSync(jsonfolder);
files.forEach(function(file){
	if(path.extname(jsonfolder + '/' + file) === '.json'){
		Object.assign(data,require(path.join(jsonfolder,file).replace(/\\/g,'/')));
	}
});

var router = jsonServer.router(data);

if(process.env.NODE_ENV == 'production'){
	var htmlPath = __dirname + config.pro.htmlPath;
	var staticPath = __dirname + config.pro.staticPath;

}else if(process.env.NODE_ENV == 'development'){
	var htmlPath = __dirname + config.dev.htmlPath;
	var staticPath = __dirname + config.dev.staticPath;
}

var imgSuffix = 'jpg|png|gif|jpeg';

//Add custom routes before JSON Server router

//index页面转发
server.get('/',function(req,res){
	res.sendFile(htmlPath + 'index.html');
});

//html文件目录转发
server.get('*.html',function(req,res){
	var path = req.path;
	res.sendFile(htmlPath + path);
});	

//js文件目录转发
server.get('*.js',function(req,res){
	var path,
		reg = /(.*\$%7B.*%7D)/g;
	if(reg.test(req.path)){
		path = req.path.replace(reg,'js/')
	}else{
		path = 'js/' + req.path;
	}
	res.sendFile(staticPath + path);
});

//css文件目录转发
server.get('*.css',function(req,res){
	var path,
		reg = /(.*\$%7B.*%7D)/g;
	if(reg.test(req.path)){
		path = req.path.replace(reg,'css/');
	}else{
		path = 'css/' + req.path;
	}
	res.sendFile(staticPath + path);
});

//img文件目录转发
server.get('*.(' + imgSuffix + ')',function(req,res){
	var path,
		reg = /(.*%7B.*%7D)/g;
	if(reg.test(req.path)){
		path = req.path.replace(reg,'imgs/');
	}else{
		path = 'imgs/' + req.path;
	}
	res.sendFile(staticPath + path);
});

//Rewriter example
//Add this before server.use(router)
server.use(jsonServer.rewriter({
	'/aaaaa/aaaaa':'/test/test'
}));

server.post('/test/test',function(req,res){
	res.send(data['test']);
});

//Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
//Use default router
server.use(router);
server.listen(3000,function(){
	console.log('JSON Server is running at port 3000.');
});


