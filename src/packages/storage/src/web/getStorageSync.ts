import { GetOrRemoveSyncOptionStruct, GetStorageSyncRes } from '../types';
import { styleIn } from '@utils/styleOptions';
import { CONTAINER_NAME } from '@utils/constant';

const getStorageSync = (args: GetOrRemoveSyncOptionStruct): GetStorageSyncRes => {
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
  return { data: JSON.parse(window.localStorage.getItem(args.key)) };
};

export default getStorageSync;
