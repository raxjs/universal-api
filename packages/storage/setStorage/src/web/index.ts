import { initApi } from '../common';

const setStorage = (args) => {
  const {success = () => {}, fail = () => {}, complete = () => {}} = args || {};
  try {
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
    success();
    complete();
  } catch (e) {
    fail(e);
    complete(e);
  }
};

export default initApi(setStorage);
