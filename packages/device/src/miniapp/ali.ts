declare const my: any;

let systemInfo;

function getSystemInfo() {
  systemInfo = my.getSystemInfoSync();
  return systemInfo;
}
const module = {};

[{
  key: 'appName',
  getFn: () => getSystemInfo().app
}, {
  key: 'platform',
  getFn: () => getSystemInfo().platform
}, {
  key: 'screenWidth',
  getFn: () => getSystemInfo().screenWidth
}, {
  key: 'screenHeight',
  getFn: () => getSystemInfo().screenHeight
}].forEach(({key, getFn}) => {
  Object.defineProperty(module, key, {
    get: getFn
  });
});

export default module;
