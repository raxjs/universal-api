import {createPromisifyImpl, testPlatformAPI} from '@utils/__test__/util';

testPlatformAPI('pullDownRefresh', ['wechat', 'ali', 'dingtalk', 'bytedance'], async (container, globals) => {
  const mockStartPullDownRefresh = jest.fn(createPromisifyImpl());
  const mockStopPullDownRefresh = jest.fn(createPromisifyImpl());

  if (container === 'wechat') {
    globals.wx.startPullDownRefresh = mockStartPullDownRefresh;
    globals.wx.stopPullDownRefresh = mockStopPullDownRefresh;
  } else if (container === 'dingtalk') {
    globals.dd.startPullDownRefresh = undefined; // 钉钉没有 startPullDownRefresh 方法
    globals.dd.stopPullDownRefresh = mockStopPullDownRefresh;
  } else if (container === 'ali') {
    globals.my.startPullDownRefresh = mockStartPullDownRefresh;
    globals.my.stopPullDownRefresh = mockStopPullDownRefresh;
  } else if (container === 'bytedance') {
    globals.tt.startPullDownRefresh = mockStartPullDownRefresh;
    globals.tt.stopPullDownRefresh = mockStopPullDownRefresh;
  }

  const { startPullDownRefresh, stopPullDownRefresh } = require('../src/index');

  if (container !== 'dingtalk') {
    await startPullDownRefresh();
    expect(mockStartPullDownRefresh.mock.calls.length).toBe(1);
  }

  await stopPullDownRefresh();
  expect(mockStopPullDownRefresh.mock.calls.length).toBe(1);
});
