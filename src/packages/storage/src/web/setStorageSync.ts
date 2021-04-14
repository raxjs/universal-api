import { SetSyncOptionStruct } from '../types';
import { styleIn } from '@utils/styleOptions';
import { CONTAINER_NAME } from '@utils/constant';

const setStorageSync = (args: SetSyncOptionStruct) => {
  if (Object.prototype.toString.call(args) !== '[object Object]') {
    throw new Error('the Function need a param of Object type');
  }
  args = styleIn(args, CONTAINER_NAME.WEB);
  if (!args.hasOwnProperty('key')) {
    throw new Error('the first param of this Function must contain a property named "key"');
  }
  if (typeof args.key !== 'string') {
    throw new Error('the first param of this Function must contain a property named "key" of string type');
  }
  if (!args.hasOwnProperty('data')) {
    throw new Error('the first param of this Function must contain a property named "data"');
  }
  window.localStorage.setItem(args.key, JSON.stringify(args.data));
};

export default setStorageSync;
