import { promisify } from '../../utils/promisify';
import { GetOrRemoveOptionStruct, SetOptionStruct } from './types';

export function initApiGetOrRemove(api) {
  return (args: GetOrRemoveOptionStruct) => {
    return promisify(api)(args);
  };
}

export function initApiSet(api) {
  return (args: SetOptionStruct) => {
    return promisify(api)(args);
  };
}
