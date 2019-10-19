const log = require('./log');

module.exports = function(promise, apiName, platformName) {
  return promise
    .then(() => {
      if (platformName) {
        log.info(`Finished create ${platformName} ${apiName}`);
      }
    })
    .catch(err => {
      log.error(err);
    });
};
