var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var browserSync = require('browser-sync');
var config = require('../config');

gulp.task('server',function(){
	nodemon({
		script:'server.js',
		watch:['server.js','gulpfile.js']
	});
	browserSync.init(null,{
		proxy:'http://localhost:3010',
		port:3011,
		open:false,
		files:[
            config.watch.htmlpath,
            config.watch.jspath,
            config.watch.csspath
        ],
		ui:{
			port:3012
		}
	});
});