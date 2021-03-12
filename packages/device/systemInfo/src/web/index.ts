

import { formatSystemInfo, formatSystemInfoAsync } from '../common';
import { AsyncOptions } from '../types';

function getPlatform() {
  const { platform } = navigator;
  if (platform) {
    if (/(iphone|ipod|ipad)/.test(navigator.userAgent.toLowerCase())) return 'iOS';
    if (/android/.test(navigator.userAgent.toLowerCase())) return 'Android';
    return platform;
  }
}

export const getInfoSync = formatSystemInfo(() => {
  return {
    pixelRatio: window.devicePixelRatio,
    screenWidth: window.document.documentElement.clientWidth,
    screenHeight: window.document.documentElement.clientHeight,
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
    language: navigator.language,
    version: navigator.appVersion,
    platform: getPlatform(),
  };
});

export const getInfo = formatSystemInfoAsync((options?: AsyncOptions) => {
  const { success, fail, complete } = options;
  try {
    const res = getInfoSync();
    success && success(res);
    complete && complete(res);
  } catch (e) {
    fail && fail(e);
    complete && complete(e);
  }
});
export default {
  getInfo,
  getInfoSync,
};
