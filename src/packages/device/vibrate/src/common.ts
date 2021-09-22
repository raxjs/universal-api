/* eslint-disable eqeqeq */
import { promisify } from '@utils/promisify';
import { styleIn } from '@utils/styleOptions';
import { PARAMS } from './types';

export function normalize(api, containerName) {
  return (args: PARAMS) => {
    return promisify(api)(styleIn(args, containerName));
  };
}
