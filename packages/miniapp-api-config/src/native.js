const listenerApis = {
  websocket: {
    onOpen: 'onSocketOpen',
    onError: 'onSocketError',
    onMessage: 'onSocketMessage',
    onClose: 'onSocketClose',
  },
  Network: {
    onStatusChange: 'onNetworkStatusChange',
  },
  Bluetooth: {
    onAdapterStateChange: 'onBluetoothAdapterStateChange',
    onDeviceFound: 'onBluetoothDeviceFound',
    onBLEConnectionStateChange: 'onBLEConnectionStateChange',
    onBLECharacteristicValueChange: 'onBLECharacteristicValueChange',
    onBeaconUpdate: 'onBeaconUpdate',
    onBeaconServiceChange: 'onBeaconServiceChange',
  },
  Screen: {
    onUserCaptureScreen: 'onUserCaptureScreen',
  },
  Memory: {
    onWarning: 'onMemoryWarning',
  },
  Accelerometer: {
    onChange: 'onAccelerometerChange',
  },
  Compass: {
    onChange: 'onCompassChange',
  },
};

const syncApis = {
  Storage: {
    setItemSync: 'setStorageSync',
    getItemSync: 'getStorageSync',
    removeItemSync: 'removeStorageSync',
    clearSync: 'clearStorageSync',
    getInfoSync: 'getStorageInfoSync',
  },
  Map: {
    createContext: 'createMapContext',
  },
  Animation: {
    createAnimation: 'createAnimation',
  },
  Screen: {
    offUserCaptureScreen: 'offUserCaptureScreen',
  },
  Accelerometer: {
    offChange: 'offAccelerometerChange',
  },
  Compass: {
    offChange: 'offCompassChange',
  },
  Analytics: {
    report: 'reportAnalytics',
  },
  IntersectionObserver: {
    create: 'createIntersectionObserver',
  },
  Keyboard: {
    hide: 'hideKeyboard',
  },
  Canvas: {
    createContext: 'createCanvasContext',
  },
  Selector: {
    create: 'createSelectorQuery',
  },
  System: {
    getInfoSync: 'getSystemInfoSync',
  }
};

const needPromisifyApis = {
  File: {
    upload: 'uploadFile',
    download: 'downloadFile',
    save: 'saveFile',
    getInfo: 'getFileInfo',
    getSavedList: 'getSavedFileList',
    getSavedInfo: 'getSavedFileInfo',
    removeSaved: 'removeSavedFile',
    openDocument: 'openDocument',
  },
  WebSocket: {
    connect: 'connectSocket',
    sendMessage: 'sendSocketMessage',
    close: 'closeSocket',
  },
  Image: {
    choose: 'chooseImage',
    preview: 'previewImage',
    getInfo: 'getImageInfo',
    compress: 'compressImage',
    save: 'saveImage',
  },
  Storage: {
    setItem: 'setStorage',
    getItem: 'getStorage',
    getInfo: 'getStorageInfo',
    remove: 'removeStorage',
    clear: 'clearStorage',
  },
  Router: {
    back: 'navigateBack',
    to: 'navigateTo',
    redirectTo: 'redirectTo',
    reLaunch: 'reLaunch',
    switchTab: 'switchTab',
  },
  Location: {
    get: 'getLocation',
    choose: 'chooseLocation',
    open: 'openLocation',
  },
  NavigationBar: {
    showLoading: 'showNavigationBarLoading',
    hideLoading: 'hideNavigationBarLoading',
    setTitle: 'setNavigationBarTitle',
    setColor: 'setNavigationBarColor',
    toMiniProgram: 'navigateToMiniProgram',
    backMiniProgram: 'navigateBackMiniProgram',
  },
  TabBar: {
    setTabBarBadge: 'setBadge',
    removeTabBarBadge: 'removeTabBarBadge',
    showRedDot: 'showTabBarRedDot',
    hideRedDot: 'hideTabBarRedDot',
    setStyle: 'setTabBarStyle',
    setItem: 'setTabBarItem',
    show: 'showTabBar',
    hide: 'hideTabBar',
  },
  Share: {
    showMenu: 'showShareMenu',
    hideMenu: 'hideShareMenu',
  },
  Background: {
    setColor: 'setBackgroundColor',
    setTextStyle: 'setBackgroundTextStyle',
  },
  Clipboard: {
    set: 'setClipboard',
    get: 'setClipboard',
  },
  Bluetooth: {
    openAdapter: 'openBluetoothAdapter',
    closeAdapter: 'closeBluetoothAdapter',
    getAdapterState: 'getBluetoothAdapterState',
    startDevicesDiscovery: 'startBluetoothDevicesDiscovery',
    stopDevicesDiscovery: 'stopBluetoothDevicesDiscovery',
    getDevices: 'getBluetoothDevices',
    getConnectedDevices: 'getConnectedBluetoothDevices',
    connectBLEDevice: 'connectBLEDevice',
    disconnectBLEDevice: 'disconnectBLEDevice',
    getBLEDeviceServices: 'getBLEDeviceServices',
    getBLEDeviceCharacteristics: 'getBLEDeviceCharacteristics',
    readBLECharacteristicValue: 'readBLECharacteristicValue',
    writeBLECharacteristicValue: 'writeBLECharacteristicValue',
    notifyBLECharacteristicValueChange: 'notifyBLECharacteristicValueChange',
    startBeaconDiscovery: 'startBeaconDiscovery',
    stopBeaconDiscovery: 'stopBeaconDiscovery',
    getBeacons: 'getBeacons',
  },
  Screen: {
    setBrightness: 'setScreenBrightness',
    getBrightness: 'getScreenBrightness',
    setKeepOn: 'setKeepScreenOn',
  },
  Scan: {
    start: 'scan',
  },
  System: {
    getInfo: 'getSystemInfo',
  },
  Setting: {
    open: 'openSetting',
    hide: 'hideSetting',
  },
  Toast: {
    show: 'showToast',
    hide: 'hideToast',
  },
  Loading: {
    show: 'showLoading',
    hide: 'hideLoading',
  },
  ActionSheet: {
    show: 'showActionSheet',
  },
  Vibrate: {
    short: 'vibrateShort',
    long: 'vibrateLong',
  },
  Phone: {
    addContact: 'addPhoneContact',
    makeCall: 'makePhoneCall',
  },
  Network: {
    getType: 'getNetworkType'
  },
  Refresh: {
    startPullDown: 'startPullDownRefresh',
    stopPullDown: 'stopPullDownRefresh',
  },
  FontFace: {
    load: 'loadFontFace'
  },
  Page: {
    scrollTo: 'pageScrollTo'
  },
  Run: {
    getData: 'getRunData'
  }
};

module.exports = {
  listenerApis,
  syncApis,
  needPromisifyApis,
};
