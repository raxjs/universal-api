if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/index.min.js');
} else {
  module.exports = require('./lib/index.js');
}