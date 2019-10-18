module.exports = function formatOriginal(original, map) {
  const result = {};
  Object.keys(original).forEach(key => {
    if (map[key]) {
      result[key] = original[map[key]];
    } else {
      result[key] = original[key];
    }
  });
  return result;
};
