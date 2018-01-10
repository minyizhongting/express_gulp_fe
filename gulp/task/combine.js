var gulp = require('gulp');
var cssImport = require('gulp-cssimport');
var cleanCSS = require('gulp-clean-css');
var config = require('../config');

gulp.task('cssImport',function(){
	return gulp.src(config.srcCss,{base:config.srcCssPath})
		.pipe(cssImport())
		.pipe(gulp.dest(config.distCssPath));
});

gulp.task('combineCss',['cssImport'],function(){
	return gulp.src(config.distCss)
			   .pipe(cleanCSS({
			   		compatibility: 'ie7'
			   }))
			   .pipe(gulp.dest(config.distCssPath));
});

gulp.task('combineJs',function(){
    return gulp.src(config.srcJs,{base:config.srcJsPath})
               .pipe(gulp.dest(config.distJsPath));
});

gulp.task('combineImgs',function(){
	return gulp.src(config.srcImgs,{base:config.src})
			   .pipe(gulp.dest(config.distRev));
});

gulp.task('combine',['combineCss','combineJs','combineImgs']);
