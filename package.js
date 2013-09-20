Package.describe({
  summary: "Quick insecure http-public-folder system for collectionFS "
});

Npm.depends({
  "connect": "2.9.0"
});
 
Package.on_use(function(api) {
  api.use(['routepolicy','webapp'],'server');
  api.add_files('cfs-public-folder.js','server');
});