const log = require('./log');

module.exports = function(promise, apiName) {
  return promise
    .then(() => {
      log.info(`Finished create ${apiName}`);
    })
    .catch(err => {
      log.error(err);
    });
};
