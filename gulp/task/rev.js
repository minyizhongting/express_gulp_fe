var gulp = require('gulp');
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');
var replace = require('gulp-replace');
var runSequence = require('run-sequence');
var config = require('../config');


gulp.task('revCss',function(){
	return gulp.src(config.distCss)
			   .pipe(rev())
			   .pipe(gulp.dest(config.distRevCssPath))
			   .pipe(rev.manifest())
			   .pipe(gulp.dest(config.distRevCssPath));
});

gulp.task('revJs',function(){
	return gulp.src(config.distJs)
			   .pipe(rev())
			   .pipe(gulp.dest(config.distRevJsPath))
			   .pipe(rev.manifest())
			   .pipe(gulp.dest(config.distRevJsPath));
});

gulp.task('mvHtmlSource',function(){
	return gulp.src(config.srcHtml)
			   .pipe(gulp.dest(config.distHtmlPath));
})

gulp.task('revCollector',function(){
	return gulp.src([config.distRevCssJson,config.distRevJsJson,config.distHtml])
			   .pipe(revCollector({
			   		replaceReved:true,
			   }))
			   .pipe(gulp.dest(config.distHtmlPath));
});

// gulp.task('adjust_manifest_css',function(){
// 	return gulp.src(config.distRevCssJson,{base:config.distRevCssPath})
// 			   .pipe(replace())
// 			   .pipe(replace())
// 			   .pipe(gulp.dest(config.distRevCssPath));
// });

gulp.task('rev',function(done){
	runSequence(
		['revCss','revJs','mvHtmlSource'],
		['revCollector'],
	done);
});