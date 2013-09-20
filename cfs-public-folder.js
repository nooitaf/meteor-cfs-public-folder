var connect = Npm.require('connect');
var path = Npm.require('path');

var basepath = path.resolve('.').split('.meteor')[0];
var localPath = basepath + ".meteor/local/cfs";

var webPath = "/cfs";

RoutePolicy.declare(webPath, 'network');

WebApp
	.connectHandlers
	.use(
	 	webPath, 
		connect.static(localPath)
	);

