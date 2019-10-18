function generateNormal(platform, apiName) {
  return `module.exports = ${platform}['${apiName}'];`;
}

function generateOverride(platform, apiName, responseMap) {
  return `const formatOriginal = require('../../formatOriginal');

  module.exports = (...args) => {
    const result = ${platform}['${apiName}'](...args);
    return formatOriginal(result, ${JSON.stringify(responseMap)});
  };`;
}

module.exports = {
  generateNormal,
  generateOverride,
};
