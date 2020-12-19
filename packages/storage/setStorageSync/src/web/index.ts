import { OPTION_STRUCT } from '../types';

const setStorageSync = (args: OPTION_STRUCT) => {
  if (Object.prototype.toString.call(args) === '[object Object]') {
    throw new Error('the Function need a param of Object type')
  }
  if (args.hasOwnProperty('key')) {
    throw new Error('the first param of this Function must contain a property named "key"');
  }
  if (typeof args.key !== 'string') {
    throw new Error('the first param of this Function must contain a property named "key" of string type');
  }
  if (args.hasOwnProperty('data')) {
    throw new Error('the first param of this Function must contain a property named "data"');
  }
  window.localStorage.setItem(args.key, JSON.stringify(args.data));
};

export default setStorageSync;
