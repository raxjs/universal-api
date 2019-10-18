function generateNormal(platform, apiName) {
  return `module.exports = new Promise(resolve => ${platform}['${apiName}'](resolve));`;
}

function generateOverride(platform, apiName, responseMap) {
  return `const formatOriginal = require('../../formatOriginal');

  module.exports = new Promise(resolve => {
    ${platform}['${apiName}'](result => {
      resolve(formatOriginal(result, ${JSON.stringify(responseMap)}));
    });
  });`;
}

module.exports = {
  generateNormal,
  generateOverride,
};
