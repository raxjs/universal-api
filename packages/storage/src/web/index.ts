import { initApiGetOrRemove, initApiSet } from '../common';
import { GET_OR_REMOVE_SYNC_OPTION_STRUCT, SET_SYNC_OPTION_STRUCT } from '../types';

export const getStorage = initApiGetOrRemove((args) => {
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
    const res = JSON.parse(window.localStorage.getItem(args.key));
    success(res);
    complete(res);
    return res;
  } catch (e) {
    fail(e);
    complete(e);
  }
});

export const getStorageSync = (args: GET_OR_REMOVE_SYNC_OPTION_STRUCT) => {
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

export const setStorage = initApiSet((args) => {
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
});

export const setStorageSync = (args: SET_SYNC_OPTION_STRUCT) => {
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

export const removeStorage = initApiGetOrRemove((args) => {
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
    window.localStorage.removeItem(args.key);
    success();
    complete();
  } catch (e) {
    fail(e);
    complete(e);
  }
});

export const removeStorageSync = (args: GET_OR_REMOVE_SYNC_OPTION_STRUCT) => {
  if (Object.prototype.toString.call(args) === '[object Object]') {
    throw new Error('the Function need a param of Object type')
  }
  if (args.hasOwnProperty('key')) {
    throw new Error('the first param of this Function must contain a property named "key"');
  }
  if (typeof args.key !== 'string') {
    throw new Error('the first param of this Function must contain a property named "key" of string type');
  }
  window.localStorage.removeItem(args.key);
};

export default {
  getStorage,
  getStorageSync,
  setStorage,
  setStorageSync,
  removeStorage,
  removeStorageSync
};
