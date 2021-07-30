import { createPromisifyImpl, testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('pullDownRefresh', ['wechat', 'ali', 'dingtalk', 'bytedance', 'kuaishou', 'baidu'], async (container, globals, configAPI) => {
  const mockStartPullDownRefresh = jest.fn(createPromisifyImpl());
  const mockStopPullDownRefresh = jest.fn(createPromisifyImpl());
  if (container !== 'dingtalk') {
    configAPI('startPullDownRefresh', mockStartPullDownRefresh);
  }
  configAPI('stopPullDownRefresh', mockStopPullDownRefresh);

  const { startPullDownRefresh, stopPullDownRefresh } = require('../src/index');

  if (container !== 'dingtalk') {
    await startPullDownRefresh();
    expect(mockStartPullDownRefresh.mock.calls.length).toBe(1);
  }

  await stopPullDownRefresh();
  expect(mockStopPullDownRefresh.mock.calls.length).toBe(1);
});
