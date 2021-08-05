/* eslint-disable @typescript-eslint/no-shadow */
import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp, isKuaiShouMiniProgram, isBaiduSmartProgram } from '@uni/env';
import { isDingdingMiniapp } from '@utils/miniappEnvApp';
// 按wechat、bytedance、dd、支付宝、web、kuaishou、baidu的方式，不支持的端相应位数置0即可
const supportInfo = {
  application: {
    support: 1111111,
    getApp: {
      support: 1111111,
    },
    getCurrentPages: {
      support: 1111111,
    },
    getLaunchOptionsSync: {
      support: 1111110,
    },
    onError: {
      support: 1111101,
    },
    offError: {
      support: 1111101,
    },
    onUnhandledRejection: {
      support: 1111110,
    },
    offUnhandledRejection: {
      support: 1111110,
    },
  },
  canvas: {
    support: 1111101,
    createContext: {
      support: 1111101,
    },
  },
  accelerometer: {
    support: 1111011,
    onChange: {
      support: 1111011,
    },
    offChange: {
      support: 1111011,
    },
  },
  clipboard: {
    support: 1111111,
    getClipboard: {
      support: 1111011,
    },
    setClipboard: {
      support: 1111111,
    },
  },
  'system-info': {
    support: 1111111,
    getInfo: {
      support: 1111111,
    },
    getInfoSync: {
      support: 1111111,
    },
  },
  file: {
    support: 1111111,
    getInfo: {
      support: 1111011,
    },
    getSavedInfo: {
      support: 1111011,
    },
    getSavedList: {
      support: 1111011,
    },
    openDocument: {
      support: 1111011,
    },
    removeSaved: {
      support: 1111011,
    },
    save: {
      support: 1111011,
    },
    download: {
      support: 1111011,
    },
    upload: {
      support: 1111111,
    },
  },
  'action-sheet': {
    support: 1111111,
  },
  alert: {
    support: 1111111,
  },
  animation: {
    support: 1111101,
  },
  toast: {
    support: 1111111,
  },
  loading: {
    support: 1111111,
    showLoading: {
      support: 1111111,
    },
    hideLoading: {
      support: 1111111,
    },
  },
  'pull-down-refresh': {
    support: 1111111,
    startPullDownRefresh: {
      support: 1111111,
    },
    stopPullDownRefresh: {
      support: 1111111,
    },
  },
  element: {
    support: 1111111,
  },
  'insection-observer': {
    support: 1111101,
  },
  confirm: {
    support: 1111111,
  },
  location: {
    support: 1111111,
    getLocation: {
      support: 1111111,
    },
    openLocation: {
      support: 1111011,
    },
  },
  image: {
    support: 1111111,
    chooseImage: {
      support: 1111111,
    },
    compressImage: {
      support: 1111011,
    },
    getImageInfo: {
      support: 1111111,
    },
    previewImage: {
      support: 1111011,
    },
    saveImage: {
      support: 1111011,
    },
  },
  navigate: {
    support: 1111111,
    push: {
      support: 1111111,
    },
    back: {
      support: 1111111,
    },
    replace: {
      support: 1111111,
    },
    reLaunch: {
      support: 1111111,
    },
    go: {
      support: 1111111,
    },
  },
  request: {
    support: 1111111,
  },
  storage: {
    support: 1111111,
    getStorage: {
      support: 1111111,
    },
    setStorage: {
      support: 1111111,
    },
    removeStorage: {
      support: 1111111,
    },
    getStorageSync: {
      support: 1111111,
    },
    setStorageSync: {
      support: 1111111,
    },
    removeStorageSync: {
      support: 1111111,
    },
  },
};

const canIUse = (platform, api, supportInfo) => {
  const apiName = api.split('.')[0];
  if (!apiName || !supportInfo[apiName]) {
    return false;
  }
  const rest = api.split('.').slice(1).join('.');
  if (rest.length) {
    return canIUse(platform, rest, supportInfo[apiName]);
  }
  if ((`${supportInfo[apiName].support }`)[platform] !== '0') {
    return true;
  }
  return false;
};

export default (apiName) => {
  if (isWeb) {
    return canIUse(4, apiName, supportInfo);
  } else if (isKuaiShouMiniProgram) {
    return canIUse(5, apiName, supportInfo);
  } else if (isWeChatMiniProgram) {
    return canIUse(0, apiName, supportInfo);
  } else if (isByteDanceMicroApp) {
    return canIUse(1, apiName, supportInfo);
  } else if (isDingdingMiniapp) {
    return canIUse(2, apiName, supportInfo);
  } else if (isMiniApp) {
    return canIUse(3, apiName, supportInfo);
  } else if (isBaiduSmartProgram) {
    return canIUse(6, apiName, supportInfo);
  } else {
    return false;
  }
};
