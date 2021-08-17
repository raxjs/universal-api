import { promisify } from '@utils/promisify';
import { styleIn } from '@utils/styleOptions';

export function normalize(api, containerName) {
  return (args) => {
    return promisify(api)(styleIn(args, containerName));
  };
}
