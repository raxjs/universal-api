import { promisify } from '../../../utils/promisify';
import { CallBack, PARAMS } from './types';

export function initApiGet(api) {
  return (args: CallBack) => {
    return promisify(api)(args);
  };
}

export function initApiSet(api) {
  return (args: PARAMS) => {
    return promisify(api)(args);
  };
} 
