declare const global: any;
import { isQuickApp } from 'universal-env';
import * as otherModule from '../index';

let systemInfo;

function getSystemInfo() {
  if (!systemInfo) {
    systemInfo = global.globalSystemInfo || {};
  }
  return systemInfo;
}

let module = {};

if (isQuickApp) {
  [
    {
      key: 'appName',
      getFn: () => getSystemInfo().appName
    },
    {
      key: 'platform',
      getFn: () => getSystemInfo().platform
    },
    {
      key: 'screenWidth',
      getFn: () => getSystemInfo().screenWidth
    },
    {
      key: 'screenHeight',
      getFn: () => getSystemInfo().screenHeight
    },
    {
      key: 'appVersion',
      getFn: () => getSystemInfo().version
    }
  ].forEach(({ key, getFn }) => {
    Object.defineProperty(module, key, { get: getFn });
  });
} else {
  module = otherModule;
}

export default module;
