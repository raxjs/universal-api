function getPlatform() {
  const platform = navigator && navigator.platform;
  if (platform) {
    if (/(iphone|ipod|ipad)/.test(navigator.userAgent)) return 'iOS';
    if (/android/.test(navigator.userAgent)) return 'Android';
    return platform;
  }
  return;
}

const module = {};
let platform;

[{
  key: 'appName',
  getFn: () => navigator && navigator.appName
}, {
  key: 'platform',
  getFn: () => {
    if (!platform) {
      platform = getPlatform();
    }
    return platform;
  }
}, {
  key: 'screenWidth',
  getFn: () => window.screen.width
}, {
  key: 'screenHeight',
  getFn: () => window.screen.height
}].forEach(({key, getFn}) => {
  Object.defineProperty(module, key, {
    get: getFn
  });
});

export default module;
