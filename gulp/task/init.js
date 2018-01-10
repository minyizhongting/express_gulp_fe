var gulp = require('gulp');
var runSquence = require('run-sequence');

gulp.task('dev',function(done){
	process.env.NODE_ENV = 'development';
	runSquence(
		['server'],
	done);
});

gulp.task('pre',function(done){
	process.env.NODE_ENV = 'production';
	runSquence(
		['clean'],
		['combineCss','combineJs','combineImgs'],
		['revCss','revJs','mvHtmlSource'],
		['revCollector'],
		['server'],
	done);
});
