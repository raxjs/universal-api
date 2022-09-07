import { styleIn } from '@uni/utils';

export function normalize(api, containerName) {
  return (options) => {
    const afterOptions = styleIn(options, containerName);
    return api(afterOptions);
  };
}
