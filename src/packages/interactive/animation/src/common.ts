import { styleIn } from '@utils/styleOptions';

/**
 * normalize options
 * @param options
 * @param containerName
 */
export function normalizeOptions(options, containerName) {
  return styleIn(options, containerName);
}
