var semver = require('semver');
var path = require('path');
require('shelljs/global');

module.exports = function(filePath) {
	this.filePath = filePath;
	var pkg = JSON.parse(cat(filePath));
	if (pkg.version === null || pkg.private) {
		var meta = 'meta.json';
		if (!test('-e', meta)) {
		      throw new Error("Null version or private flag detected and meta.json not found");
		}
		console.log("Null version or private flag detected, switching to meta.json");
		this.filePath = meta;
	}

	this.readVersion = function() {
		var pkg = JSON.parse(cat(this.filePath));
		return semver(pkg.version);
	};

	this.writeVersion = function(newVersion) {
		var pkg = JSON.parse(cat(this.filePath));
		pkg.version = newVersion.format ? newVersion.format() : newVersion;

		var pkgJson = JSON.stringify(pkg, null, 2) + '\n';
		pkgJson.to(this.filePath);
	};
};

module.exports.supports = function(filePath) {
  return /\.json$/.test(filePath);
};
