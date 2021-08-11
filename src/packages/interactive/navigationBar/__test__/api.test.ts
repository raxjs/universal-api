import { createPromisifyImpl, isAliContainer, testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('navigationBar', ['wechat', 'ali', 'dingtalk', 'bytedance', 'kuaishou', 'baidu'], async (container, globals, configAPI) => {
  const mockSetNavigationBar = jest.fn(createPromisifyImpl());
  const mockSetNavigationBarColor = jest.fn(createPromisifyImpl());
  const mockSetNavigationBarTitle = jest.fn(createPromisifyImpl());

  // TODO 临时模拟 window，待删除
  globals.window = {};
  if (isAliContainer(container)) {
    configAPI('setNavigationBar', mockSetNavigationBar);
  } else {
    configAPI('setNavigationBarColor', mockSetNavigationBarColor);
    configAPI('setNavigationBarTitle', mockSetNavigationBarTitle);
  }

  const { setNavigationBarColor, setNavigationBarTitle } = require('../src/index');
  await setNavigationBarColor({
    backgroundColor: '#ff0000',
  });
  if (isAliContainer(container)) {
    expect(mockSetNavigationBar.mock.calls.length).toBe(1);
    expect(mockSetNavigationBar.mock.calls[0][0].backgroundColor).toBe('#ff0000');
  } else {
    expect(mockSetNavigationBarColor.mock.calls.length).toBe(1);
    expect(mockSetNavigationBarColor.mock.calls[0][0].backgroundColor).toBe('#ff0000');
  }

  await setNavigationBarTitle({ title: 'abc' });
  if (isAliContainer(container)) {
    expect(mockSetNavigationBar.mock.calls.length).toBe(2);
    expect(mockSetNavigationBar.mock.calls[1][0].title).toBe('abc');
  } else {
    expect(mockSetNavigationBarTitle.mock.calls.length).toBe(1);
    expect(mockSetNavigationBarTitle.mock.calls[0][0].title).toBe('abc');
  }
});
