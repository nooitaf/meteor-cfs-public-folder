var connect = Npm.require('connect');
var path = Npm.require('path');

var bundleRoot = path.join(process.mainModule.filename, '..');
var rootDir = path.join(bundleRoot, '..') + path.sep;
var serverPath = path.join(rootDir, 'cfs');

var webPath = "/cfs";

RoutePolicy.declare(webPath, 'network');

WebApp
	.connectHandlers
	.use(
	 	webPath, 
		connect.static(serverPath)
	);

