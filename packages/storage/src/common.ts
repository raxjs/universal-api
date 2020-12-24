import { promisify } from '../../utils/promisify';
import { GET_OR_REMOVE_OPTION_STRUCT, SET_OPTION_STRUCT } from './types';

export function initApiGetOrRemove(api) {
  return (args: GET_OR_REMOVE_OPTION_STRUCT) => {
    return promisify(api)(args);
  };
}

export function initApiSet(api) {
  return (args: SET_OPTION_STRUCT) => {
    return promisify(api)(args);
  };
}
