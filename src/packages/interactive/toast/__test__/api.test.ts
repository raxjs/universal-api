import { createPromisifyImpl, isAliContainer, testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('toast', ['wechat', 'ali', 'dingtalk', 'bytedance', 'kuaishou', 'baidu'], async (container, globals, configAPI) => {
  const mockShowToast = jest.fn(createPromisifyImpl());
  const mockHideToast = jest.fn(createPromisifyImpl());
  configAPI('showToast', mockShowToast);
  configAPI('hideToast', mockHideToast);

  const { show, hide, showToast, hideToast } = require('../src/index');

  await show({ content: 'abc' });
  expect(mockShowToast.mock.calls.length).toBe(1);
  if (isAliContainer(container)) {
    expect(mockShowToast.mock.calls[0][0].content).toBe('abc');
  } else {
    expect(mockShowToast.mock.calls[0][0].title).toBe('abc');
  }

  mockShowToast.mockClear();
  await showToast({ content: 'abc' });
  expect(mockShowToast.mock.calls.length).toBe(1);
  if (isAliContainer(container)) {
    expect(mockShowToast.mock.calls[0][0].content).toBe('abc');
  } else {
    expect(mockShowToast.mock.calls[0][0].title).toBe('abc');
  }

  await hide();
  expect(mockHideToast.mock.calls.length).toBe(1);

  mockHideToast.mockClear();
  await hideToast();
  expect(mockHideToast.mock.calls.length).toBe(1);
});
