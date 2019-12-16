const module = {};

[{
  key: 'appName',
  getFn: () => navigator.appName
}, {
  key: 'platform',
  getFn: () => navigator.platform
}, {
  key: 'screenWidth',
  getFn: () => window.screen.width / window.devicePixelRatio
}, {
  key: 'screenHeight',
  getFn: () => window.screen.height / window.devicePixelRatio
}, {
  key: 'appVersion',
  getFn: () => navigator.appVersion
}].forEach(({key, getFn}) => {
  Object.defineProperty(module, key, {
    get: getFn
  });
});

export default module;
