const path = require('path');
const gulpParams = require('./params');

module.exports = function compile(api, options) {
  gulpParams.api = api;
  gulpParams.gulpInfo = options;
  process.argv = process.argv.slice(0, 2);
  process.argv.push('--gulpfile', path.resolve(__dirname, options.isMain ? './gulpfileMain.js' : './gulpfile.js'));
  process.argv.push('--cwd', process.cwd());
  require('gulp-cli')();
};