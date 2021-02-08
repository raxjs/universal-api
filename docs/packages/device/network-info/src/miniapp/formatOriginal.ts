/**
 * Format raw data.
 *
 * @param original The original data
 * @param map Parameter mapping
 *
 * @returns API parameters
 */
export default function formatOriginal(original, map) {
  Object.keys(map).forEach(key => {
    const value = original[map[key]];
    if (value) {
      original[key] = value;
    }
  });
  return original;
};
