const module = {};

[{
  key: 'appName',
  getFn: () => navigator && navigator.appName
}, {
  key: 'platform',
  getFn: () => navigator && navigator.platform
}, {
  key: 'screenWidth',
  getFn: () => window.screen.width / window.devicePixelRatio
}, {
  key: 'screenHeight',
  getFn: () => window.screen.height / window.devicePixelRatio
}].forEach(({key, getFn}) => {
  Object.defineProperty(module, key, {
    get: getFn
  });
});

export default module;
