import { testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('systemInfo', ['wechat', 'ali', 'dingtalk', 'bytedance'], async (container, globals, configAPI) => {
  const mockGetSystemInfo = jest.fn();
  const mockGetSystemInfoSync = jest.fn(() => ({}));
  configAPI('getSystemInfo', mockGetSystemInfo);
  configAPI('getSystemInfoSync', mockGetSystemInfoSync);

  const { getInfo, getInfoSync } = require('../src/index');

  getInfo();
  expect(mockGetSystemInfo.mock.calls.length).toBe(1);

  getInfoSync();
  expect(mockGetSystemInfoSync.mock.calls.length).toBe(1);
});
