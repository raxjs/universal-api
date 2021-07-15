import { createPromisifyImpl, isAliContainer, testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('loading', ['wechat', 'ali', 'dingtalk', 'bytedance'], async (container, globals, configAPI) => {
  const mockShowLoading = jest.fn(createPromisifyImpl());
  const mockHideLoading = jest.fn(createPromisifyImpl());

  // TODO 临时模拟 window，待删除
  globals.window = {};
  configAPI('showLoading', mockShowLoading);
  configAPI('hideLoading', mockHideLoading);

  const { showLoading, hideLoading } = require('../src/index');
  await showLoading({
    content: 'abc',
  });
  expect(mockShowLoading.mock.calls.length).toBe(1);
  if (isAliContainer(container)) {
    expect(mockShowLoading.mock.calls[0][0].content).toBe('abc');
  } else {
    expect(mockShowLoading.mock.calls[0][0].title).toBe('abc');
  }

  await hideLoading();
  expect(mockHideLoading.mock.calls.length).toBe(1);
});
