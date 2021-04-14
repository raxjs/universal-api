import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const getStorage = normalize.getStorage((args) => {
  const { success = () => {}, fail = () => {}, complete = () => {} } = args || {};
  try {
    if (Object.prototype.toString.call(args) !== '[object Object]') {
      throw new Error('the Function need a param of Object type');
    }
    if (!args.hasOwnProperty('key')) {
      throw new Error('the first param of this Function must contain a property named "key"');
    }
    if (typeof args.key !== 'string') {
      throw new Error('the first param of this Function must contain a property named "key" of string type');
    }
    const res = { data: JSON.parse(window.localStorage.getItem(args.key)) };
    success(res);
    complete(res);
    return res;
  } catch (e) {
    fail(e);
    complete(e);
  }
}, CONTAINER_NAME.WEB);

export default getStorage;
