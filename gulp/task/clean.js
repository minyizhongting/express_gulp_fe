var gulp = require('gulp');
var clean = require('gulp-clean');
var config = require('../config');

gulp.task('clean:html',function(){
	return 	gulp.src(config.distHtmlPath)
				.pipe(clean({
					force:true
				}));
});

gulp.task('clean',function(){
	return	gulp.src(config.dist)
				.pipe(clean({
					force:true
			}));
});