import { styleIn } from '@utils/styleOptions';

export function normalize(api, containerName) {
  return (options) => {
    const afterOptions = styleIn(options, containerName);

    return api(afterOptions);
  };
}
