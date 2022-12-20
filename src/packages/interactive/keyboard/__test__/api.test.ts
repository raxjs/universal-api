import { createPromisifyImpl, testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('keyboard', ['wechat', 'ali', 'dingtalk', 'bytedance', 'kuaishou', 'baidu'], async (container, globals, configAPI) => {
  const mockHide = jest.fn(createPromisifyImpl());
  configAPI('hideKeyboard', mockHide);

  const { hide } = require('../src/index');
  await hide();

  expect(mockHide.mock.calls.length).toBe(1);
});
