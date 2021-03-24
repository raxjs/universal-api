

import { formatSystemInfo } from '../common';

function getPlatform() {
  const { platform } = navigator;
  if (platform) {
    if (/(iphone|ipod|ipad)/.test(navigator.userAgent.toLowerCase())) return 'iOS';
    if (/android/.test(navigator.userAgent.toLowerCase())) return 'Android';
    return platform;
  }
}

const getInfoSync = formatSystemInfo(() => {
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


export default getInfoSync;
