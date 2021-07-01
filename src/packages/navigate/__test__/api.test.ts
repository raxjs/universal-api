import { createPromisifyImpl, testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('navigate', ['wechat', 'ali', 'bytedance'], async (container, globals) => {
  const mockPush = jest.fn(createPromisifyImpl());
  const mockBack = jest.fn(createPromisifyImpl());
  const mockReLaunch = jest.fn(createPromisifyImpl());
  const mockReplace = jest.fn(createPromisifyImpl());

  if (container === 'wechat') {
    globals.wx.navigateTo = mockPush;
    globals.wx.navigateBack = mockBack;
    globals.wx.reLaunch = mockReLaunch;
    globals.wx.redirectTo = mockReplace;
  } else if (container === 'ali') {
    globals.my.navigateTo = mockPush;
    globals.my.navigateBack = mockBack;
    globals.my.reLaunch = mockReLaunch;
    globals.my.redirectTo = mockReplace;
  } else if (container === 'bytedance') {
    globals.tt.navigateTo = mockPush;
    globals.tt.navigateBack = mockBack;
    globals.tt.reLaunch = mockReLaunch;
    globals.tt.redirectTo = mockReplace;
  }

  const { push, back, reLaunch, replace } = require('../src/index');

  await push({ url: 'abc' });
  expect(mockPush.mock.calls.length).toBe(1);
  expect(mockPush.mock.calls[0][0].url).toBe('abc');

  await back();
  expect(mockBack.mock.calls.length).toBe(1);

  await reLaunch({ url: 'def' });
  expect(mockReLaunch.mock.calls.length).toBe(1);
  expect(mockReLaunch.mock.calls[0][0].url).toBe('def');

  await replace({ url: 'ghi' });
  expect(mockReplace.mock.calls.length).toBe(1);
  expect(mockReplace.mock.calls[0][0].url).toBe('ghi');
});
