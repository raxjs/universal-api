function generateNormal(platform, apiName) {
  return `declare const ${platform}: any;\nexport default ${platform}['${apiName}'];`;
}

function generateOverride(platform, apiName, responseMap) {
  return `import formatOriginal from '../formatOriginal';
declare const ${platform}: any;
export default (...args) => {
  const result = ${platform}['${apiName}'](...args);
  return formatOriginal(result, ${JSON.stringify(responseMap)});
};`;
}

module.exports = {
  generateNormal,
  generateOverride,
};
