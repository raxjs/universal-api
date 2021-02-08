function generateNormal(platform, apiName) {
  return `import promisifyFn from '../promisifyFn';\ndeclare const ${platform}: any;\nexport default options => promisifyFn(${platform}['${apiName}'], options);`;
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

  return `import promisifyFn from '../promisifyFn';\nimport formatOriginal from '../formatOriginal';
declare const ${platform}: any;
export default options => {
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
