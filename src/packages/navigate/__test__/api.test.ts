import { createPromisifyImpl, testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('navigate', ['wechat', 'ali', 'bytedance', 'kuaishou', 'baidu'], async (container, globals, configAPI) => {
  const mockPush = jest.fn(createPromisifyImpl());
  const mockBack = jest.fn(createPromisifyImpl());
  const mockReLaunch = jest.fn(createPromisifyImpl());
  const mockReplace = jest.fn(createPromisifyImpl());
  const mockSwitchTab = jest.fn(createPromisifyImpl());
  configAPI('navigateTo', mockPush);
  configAPI('navigateBack', mockBack);
  configAPI('reLaunch', mockReLaunch);
  configAPI('redirectTo', mockReplace);
  configAPI('switchTab', mockSwitchTab);

  const { push, back, go, reLaunch, replace, switchTab } = require('../src/index');

  await push({ url: 'abc' });
  expect(mockPush.mock.calls.length).toBe(1);
  expect(mockPush.mock.calls[0][0].url).toBe('abc');

  await back();
  expect(mockBack.mock.calls.length).toBe(1);

  mockBack.mockClear();
  await go({ step: -2 });
  expect(mockBack.mock.calls[0][0]).toMatchObject({
    delta: 2,
  });

  await reLaunch({ url: 'def' });
  expect(mockReLaunch.mock.calls.length).toBe(1);
  expect(mockReLaunch.mock.calls[0][0].url).toBe('def');

  await replace({ url: 'ghi' });
  expect(mockReplace.mock.calls.length).toBe(1);
  expect(mockReplace.mock.calls[0][0].url).toBe('ghi');

  await switchTab({ url: 'jkl' });
  expect(mockSwitchTab.mock.calls.length).toBe(1);
  expect(mockSwitchTab.mock.calls[0][0].url).toBe('jkl');
});
