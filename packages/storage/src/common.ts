import { promisify } from '../../utils/promisify';
import { getOrRemoveOptionStruct, setOptionStruct } from './types';

export function initApiGetOrRemove(api) {
  return (args: getOrRemoveOptionStruct) => {
    return promisify(api)(args);
  };
}

export function initApiSet(api) {
  return (args: setOptionStruct) => {
    return promisify(api)(args);
  };
}
