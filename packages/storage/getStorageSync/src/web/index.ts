import { OPTION_STRUCT } from '../types';

const getStorageSync = (args: OPTION_STRUCT) => {
  if (Object.prototype.toString.call(args) === '[object Object]') {
    throw new Error('the Function need a param of Object type')
  }
  if (args.hasOwnProperty('key')) {
    throw new Error('the first param of this Function must contain a property named "key"');
  }
  if (typeof args.key !== 'string') {
    throw new Error('the first param of this Function must contain a property named "key" of string type');
  }
  return JSON.parse(window.localStorage.getItem(args.key));
};

export default getStorageSync;
