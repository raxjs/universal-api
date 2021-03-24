import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { normalize } from '../common';

export const getStorage = normalize.getStorage((args) => (isDingdingMiniapp ? dd.getStorage(args) : my.getStorage(args)));

export const getStorageSync = (args) => (isDingdingMiniapp ? dd.getStorageSync(args) : my.getStorageSync(args));

export const setStorage = normalize.setStorage((args) => (isDingdingMiniapp ? dd.setStorage(args) : my.setStorage(args)));

export const setStorageSync = (args) => (isDingdingMiniapp ? dd.setStorageSync(args) : my.setStorageSync(args));

export const removeStorage = normalize.removeStorage((args) => (isDingdingMiniapp ? dd.removeStorage(args) : my.removeStorage(args)));

export const removeStorageSync = (args) => (isDingdingMiniapp ? dd.removeStorageSync(args) : my.removeStorageSync(args));

export default {
  getStorage,
  getStorageSync,
  setStorage,
  setStorageSync,
  removeStorage,
  removeStorageSync,
};
