import { testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('recorder', ['wechat', 'ali', 'dingtalk', 'bytedance'], async (container, globals, configAPI) => {
  const mockGetRecorderManager = jest.fn();
  configAPI('getRecorderManager', mockGetRecorderManager);

  const { getRecorderManager } = require('../src/index');

  getRecorderManager();
  expect(mockGetRecorderManager.mock.calls.length).toBe(1);
});
