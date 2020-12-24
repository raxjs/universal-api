import { isDingdingMiniapp } from 'universal-env';
import { initApiGetOrRemove, initApiSet } from '../common';

export const getStorage = initApiGetOrRemove(isDingdingMiniapp ? dd.getStorage : my.getStorage);

export const getStorageSync = isDingdingMiniapp ? dd.getStorageSync : my.getStorageSync;

export const setStorage = initApiSet(isDingdingMiniapp ? dd.setStorage : my.setStorage);

export const setStorageSync = isDingdingMiniapp ? dd.setStorageSync : my.setStorageSync;

export const removeStorage = initApiGetOrRemove(isDingdingMiniapp ? dd.removeStorage : my.removeStorage);

export const removeStorageSync = isDingdingMiniapp ? dd.removeStorageSync : my.removeStorageSync;

export default {
  getStorage,
  getStorageSync,
  setStorage,
  setStorageSync,
  removeStorage,
  removeStorageSync
};
