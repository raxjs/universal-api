/**
 * Format raw data.
 *
 * @param original The original data
 * @param map Parameter mapping
 *
 * @returns API parameters
 */
export default function formatOriginal(original, map) {
  const result: any = {};
  Object.keys(original).forEach(key => {
    if (map[key]) {
      result[map[key]] = original[key];
    } else {
      result[key] = original[key];
    }
  });
  return result;
};
