import { isWeb, isWeex, isMiniApp } from 'universal-env';
import { MiniAppSystem } from './types';

declare const my: any;
let miniAppSystemInfo: MiniAppSystem;
if (isMiniApp) {
  miniAppSystemInfo = my.getSystemInfoSync();
}
function getAppName(): string {
  if (isMiniApp) {
    return miniAppSystemInfo.app;
  } else {
    return navigator && navigator.appName;
  }
};

function getPlatform(): string {
  if (isMiniApp) {
    if (miniAppSystemInfo.platform === 'iPhone OS') {
      return 'iOS';
    }
    return miniAppSystemInfo.platform;
  } else if (isWeb) {
    const isAndroid = Boolean(navigator.userAgent.match(/android/i));
    const isIOS = navigator.platform.toLowerCase() === 'ios';
    return isAndroid ? 'Android' : isIOS ? 'iOS' : navigator.platform;
  } else if (isWeex) {
    return navigator.platform;
  }
  return '';
}

function getScreenWidth(): number {
  if (isMiniApp) {
    return miniAppSystemInfo.screenWidth;
  } else if (isWeex) {
    return window.screen.width / window.devicePixelRatio;
  } else if (isWeb) {
    return window.screen.width;
  }
  return 0;
}

function getScreenHeight(): number {
  if (isMiniApp) {
    return miniAppSystemInfo.screenHeight;
  } else if (isWeex) {
    return window.screen.height / window.devicePixelRatio;
  } else if (isWeb) {
    return window.screen.height;
  }
  return 0;
}

const appName = getAppName();
const platform = getPlatform();
const screenWidth = getScreenWidth();
const screenHeight = getScreenHeight();

const CALCULATION_ACCURACY = 8;

function px2rpx(value: number): number {
  return Number((750 * value / screenWidth).toFixed(CALCULATION_ACCURACY));
}

function rpx2px(value: number): number {
  return Number((screenWidth / 750 * value).toFixed(CALCULATION_ACCURACY));
}

export {
  appName,
  platform,
  screenWidth,
  screenHeight,
  px2rpx,
  rpx2px
};
