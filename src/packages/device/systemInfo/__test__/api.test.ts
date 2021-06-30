import { testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('systemInfo', ['wechat', 'ali', 'dingtalk', 'bytedance'], async (container, globals) => {
  const mockGetSystemInfo = jest.fn();
  const mockGetSystemInfoSync = jest.fn(() => ({}));

  if (container === 'wechat') {
    globals.wx.getSystemInfo = mockGetSystemInfo;
    globals.wx.getSystemInfoSync = mockGetSystemInfoSync;
  } else if (container === 'dingtalk') {
    globals.dd.getSystemInfo = mockGetSystemInfo;
    globals.dd.getSystemInfoSync = mockGetSystemInfoSync;
  } else if (container === 'ali') {
    globals.my.getSystemInfo = mockGetSystemInfo;
    globals.my.getSystemInfoSync = mockGetSystemInfoSync;
  } else if (container === 'bytedance') {
    globals.tt.getSystemInfo = mockGetSystemInfo;
    globals.tt.getSystemInfoSync = mockGetSystemInfoSync;
  }

  const { getInfo, getInfoSync } = require('../src/index');

  getInfo();
  expect(mockGetSystemInfo.mock.calls.length).toBe(1);

  getInfoSync();
  expect(mockGetSystemInfoSync.mock.calls.length).toBe(1);
});
