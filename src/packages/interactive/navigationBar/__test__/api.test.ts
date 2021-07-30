import { createPromisifyImpl, isAliContainer, testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('navigationBar', ['wechat', 'bytedance', 'kuaishou', 'baidu'], async (container, globals, configAPI) => {
  const mockSetNavigationBarColor = jest.fn(createPromisifyImpl());
  const mockSetNavigationBarTitle = jest.fn(createPromisifyImpl());

  // TODO 临时模拟 window，待删除
  globals.window = {};
  configAPI('setNavigationBarColor', mockSetNavigationBarColor);
  configAPI('setNavigationBarTitle', mockSetNavigationBarTitle);

  const { setNavigationBarColor, setNavigationBarTitle } = require('../src/index');
  await setNavigationBarColor({
    backgroundColor: '#ff0000',
  });
  expect(mockSetNavigationBarColor.mock.calls.length).toBe(1);
  expect(mockSetNavigationBarColor.mock.calls[0][0].backgroundColor).toBe('#ff0000');

  await setNavigationBarTitle({ title: 'abc' });
  expect(mockSetNavigationBarTitle.mock.calls.length).toBe(1);
  expect(mockSetNavigationBarTitle.mock.calls[0][0].title).toBe('abc');
});
