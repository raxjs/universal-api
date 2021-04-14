import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

const setStorage = normalize.setStorage((args) => {
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
    if (!args.hasOwnProperty('data')) {
      throw new Error('the first param of this Function must contain a property named "data"');
    }
    window.localStorage.setItem(args.key, JSON.stringify(args.data));
    success();
    complete();
  } catch (e) {
    fail(e);
    complete(e);
  }
}, CONTAINER_NAME.WEB);

export default setStorage;
