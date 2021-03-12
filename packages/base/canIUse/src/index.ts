import { isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp } from '@uni/env';
import { isDingdingMiniapp } from '../../../utils/miniappEnvApp';
// 按wechat、bytedance、dd、支付宝、web的方式，不支持的端相应位数置0即可
const supportInfo = {
  application: {
    support: 11111,
    getApp: {
      support: 11111,
    },
    getCurrentPages: {
      support: 11111,
    },
    getLaunchOptionsSync: {
      support: 11111,
    },
    onError: {
      support: 11111,
    },
    offError: {
      support: 11111,
    },
    onUnhandledRejection: {
      support: 11111,
    },
    offUnhandledRejection: {
      support: 11111,
    },
  },
  canvas: {
    support: 11111,
    createContext: {
      support: 11111,
    },
  },
  accelerometer: {
    support: 11110,
    onChange: {
      support: 11110,
    },
    offChange: {
      support: 11110,
    },
  },
  clipboard: {
    support: 11111,
    getClipboard: {
      support: 11110,
    },
    setClipboard: {
      support: 11111,
    },
  },
  'system-info': {
    support: 11111,
    getInfo: {
      support: 11111,
    },
    getInfoSync: {
      support: 11111,
    },
  },
  file: {
    support: 11111,
    getInfo: {
      support: 11110,
    },
    getSavedInfo: {
      support: 11110,
    },
    getSavedList: {
      support: 11110,
    },
    openDocument: {
      support: 11110,
    },
    removeSaved: {
      support: 11110,
    },
    save: {
      support: 11110,
    },
    download: {
      support: 11110,
    },
    upload: {
      support: 11111,
    },
  },
  'action-sheet': {
    support: 11111,
  },
  alert: {
    support: 11111,
  },
  toast: {
    support: 11111,
  },
  loading: {
    support: 11111,
    showLoading: {
      support: 11111,
    },
    hideLoading: {
      support: 11111,
    },
  },
  element: {
    support: 11111,
  },
  'insection-observer': {
    support: 11111,
  },
  confirm: {
    support: 11111,
  },
  location: {
    support: 11111,
    getLocation: {
      support: 11111,
    },
    openLocation: {
      support: 11110,
    },
  },
  image: {
    support: 11111,
    chooseImage: {
      support: 11111,
    },
    compressImage: {
      support: 11110,
    },
    getImageInfo: {
      support: 11111,
    },
    previewImage: {
      support: 11110,
    },
    saveImage: {
      support: 11110,
    },
  },
  navigate: {
    support: 11111,
    push: {
      support: 11111,
    },
    back: {
      support: 11111,
    },
    replace: {
      support: 11111,
    },
    reLaunch: {
      support: 11111,
    },
    go: {
      support: 11111,
    },
  },
  request: {
    support: 11111,
  },
  storage: {
    support: 11111,
    getStorage: {
      support: 11111,
    },
    setStorage: {
      support: 11111,
    },
    removeStorage: {
      support: 11111,
    },
    getStorageSync: {
      support: 11111,
    },
    setStorageSync: {
      support: 11111,
    },
    removeStorageSync: {
      support: 11111,
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
  if (isWeChatMiniProgram) {
    return canIUse(0, apiName, supportInfo);
  } else if (isByteDanceMicroApp) {
    return canIUse(1, apiName, supportInfo);
  } else if (isDingdingMiniapp) {
    return canIUse(2, apiName, supportInfo);
  } else if (isMiniApp) {
    return canIUse(3, apiName, supportInfo);
  } else if (isWeb) {
    return canIUse(4, apiName, supportInfo);
  } else {
    return false;
  }
};
