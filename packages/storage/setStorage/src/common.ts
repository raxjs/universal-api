import { promisify } from '../../../utils/promisify';
import { OPTION_STRUCT } from './types';

export function initApi(api) {
  return (args: OPTION_STRUCT) => {
    return promisify(api)(args);
  };
}