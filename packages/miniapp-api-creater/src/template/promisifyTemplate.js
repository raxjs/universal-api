function generateNormal(platform, apiName) {
  return `const promisifyFn = require('../../promisifyFn');
module.exports = options => promisifyFn(${platform}['${apiName}'], options);`;
}

function generateOverride(
  platform,
  apiName,
  optionsMap,
  responseMap,
  errorMap,
) {
  const optionsTemplate = optionsMap
    ? `options = formatOriginal(options, ${JSON.stringify(optionsMap)});`
    : '';

  return `const promisifyFn = require('../../promisifyFn');

module.exports = options => {
  ${optionsTemplate}
  return promisifyFn(${platform}['${apiName}'], options, ${
  responseMap ? JSON.stringify(responseMap) : null
}, ${errorMap ? JSON.stringify(errorMap) : null});
};`;
}

module.exports = {
  generateNormal,
  generateOverride,
};
