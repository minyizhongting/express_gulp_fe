var cssDomain = '${test.css.url}';
var jsDomain = '${test.js.url}';

var htmlPath = '/html/';
var staticPath = '/static/';
var preHtmlPath = '/dist/html/';
var preStaticPath = '/dist/static/rev/';

var src = './static';
var srcCss = src + '/css/entry/**/*.css';
var srcJs = src + '/js/**/*.js';
var srcImgs = src + '/imgs/**/*.*';
var srcHtml = './html/**/*.html';

var srcCssPath = src + '/css';
var srcJsPath = src + '/js';
var srcImgsPath = src + '/imgs';
var srcHtmlPath = './html';

var dist = './dist';
var distStatic = dist + '/static';
var distCss = distStatic + '/css/**/*.css';
var distJs = distStatic + '/js/**/*.js';
var distHtml = dist + '/html/**/*.html';

var distCssPath = distStatic + '/css';
var distJsPath = distStatic + '/js';
var distHtmlPath = dist + '/html';

var distRev = distStatic + '/rev';
var distRevCss = distRev + '/css/**/*.css';
var distRevJs = distRev + '/js/**/*.js';
var distRevCssPath = distRev + '/css';
var distRevJsPath = distRev + '/js';
var distRevCssJson = distRev + '/css/*.json';
var distRevJsJson = distRev + '/js/*.json';
var distRevImgs = distRev + '/imgs';

module.exports = {
	mock:'/mock/RESTAPI',
	dev:{
		htmlPath:htmlPath,
		staticPath:staticPath,
	},
	pro:{
		htmlPath:preHtmlPath,
		staticPath:preStaticPath,
	},
	cssDomain:cssDomain,
	jsDomain:jsDomain,

	src:src,
	srcCss:srcCss,
	srcJs:srcJs,
	srcImgs:srcImgs,
	srcHtml:srcHtml,

	srcCssPath:srcCssPath,
	srcJsPath:srcJsPath,
	srcImgsPath:srcImgsPath,
	srcHtmlPath:srcHtmlPath,

	dist:dist,
	distStatic:distStatic,
	distCss:distCss,
	distJs:distJs,
	distHtml:distHtml,

	distCssPath:distCssPath,
	distJsPath:distJsPath,
	distHtmlPath:distHtmlPath,

	distRev:distRev,
	distRevCss:distRevCss,
	distRevJs:distRevJs,
	distRevCssPath:distRevCssPath,
	distRevJsPath:distRevJsPath,
	distRevCssJson:distRevCssJson,
	distRevJsJson:distRevJsJson,
	distRevImgs:distRevImgs,

	watch:{
		jspath:'./static/js/**/*.js',
		csspath:'./static/css/**/*.css',
		htmlpath:'./html/**/*.html'
	}
};

