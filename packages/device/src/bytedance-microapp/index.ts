declare const tt: any;
let systemInfo;

function getSystemInfo() {
  if (!systemInfo) return systemInfo = tt.getSystemInfoSync();
  return systemInfo;
}
const module = {};

[{
  key: 'appName',
  getFn: () => 'bytedance'
}, {
  key: 'platform',
  getFn: () => getSystemInfo().platform
}, {
  key: 'screenWidth',
  getFn: () => getSystemInfo().screenWidth
}, {
  key: 'screenHeight',
  getFn: () => getSystemInfo().screenHeight
}, {
  key: 'appVersion',
  getFn: () => getSystemInfo().version
}, {
  key: 'devicePixelRatio',
  getFn: () => getSystemInfo().pixelRatio
}].forEach(({key, getFn}) => {
  Object.defineProperty(module, key, {
    get: getFn
  });
});

export default module;

