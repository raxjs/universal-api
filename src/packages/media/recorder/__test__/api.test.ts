import { testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('recorder', ['wechat', 'ali', 'dingtalk', 'bytedance'], async (container, globals) => {
  const mockGetRecorderManager = jest.fn();

  if (container === 'wechat') {
    globals.wx.getRecorderManager = mockGetRecorderManager;
  } else if (container === 'dingtalk') {
    globals.dd.getRecorderManager = mockGetRecorderManager;
  } else if (container === 'ali') {
    globals.my.getRecorderManager = mockGetRecorderManager;
  } else if (container === 'bytedance') {
    globals.tt.getRecorderManager = mockGetRecorderManager;
  }

  const { getRecorderManager } = require('../src/index');

  getRecorderManager();
  expect(mockGetRecorderManager.mock.calls.length).toBe(1);
});
