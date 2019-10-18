const creater = require('../src');

const listenerApis = {
  Socket: {
    onOpen: 'onSocketOpen',
    onError: 'onSocketError',
    onMessage: 'onSocketMessage',
    onClose: 'onSocketClose',
  },
};

const syncApis = {
  Storage: {
    setItemSync: 'setStorageSync',
    getItemSync: 'getStorageSync',
    removeItemSync: 'removeStorageSync',
    clearSync: 'clearStorageSync',
    getSystemInfoSync: 'getSystemInfoSync',
  },
};

const promisifyApis = {
  Share: {
    showMenu: 'showShareMenu'
  }
};

const configs = {
  aliConfig: {
    platformName: 'ali',
    listenerApis,
    syncApis,
    promisifyApis,
    overrideMap: {
      showMenu: {
        name: 'showSharePanel',
      },
    },
  },
  wechatConfig: {
    platformName: 'wechat',
    listenerApis,
    syncApis,
    promisifyApis
  },
};

creater(configs);
