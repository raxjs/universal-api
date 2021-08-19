import { createPromisifyImpl, testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('tabBar', ['wechat', 'ali', 'dingtalk', 'bytedance', 'kuaishou', 'baidu'], async (container, globals, configAPI) => {
  const mockShowTabBar = jest.fn(createPromisifyImpl());
  const mockHideTabBar = jest.fn(createPromisifyImpl());

  // TODO 临时模拟 window，待删除
  globals.window = {};
  configAPI('showTabBar', mockShowTabBar);
  configAPI('hideTabBar', mockHideTabBar);

  const { showTabBar, hideTabBar } = require('../src/index');
  await showTabBar({
    animation: true,
  });
  expect(mockShowTabBar.mock.calls.length).toBe(1);
  expect(mockShowTabBar.mock.calls[0][0].animation).toBe(true);

  await hideTabBar({
    animation: true,
  });
  expect(mockHideTabBar.mock.calls.length).toBe(1);
  expect(mockHideTabBar.mock.calls[0][0].animation).toBe(true);
});
