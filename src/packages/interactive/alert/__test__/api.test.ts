import { createPromisifyImpl, testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('alert', ['wechat', 'ali', 'dingtalk', 'bytedance', 'kuaishou', 'baidu'], async (container, globals) => {
  const mockShowAlert = jest.fn(createPromisifyImpl());

  if (container === 'wechat') {
    globals.wx.showModal = mockShowAlert;
  } else if (container === 'dingtalk') {
    globals.dd.alert = mockShowAlert;
  } else if (container === 'ali') {
    globals.my.alert = mockShowAlert;
  } else if (container === 'bytedance') {
    globals.tt.showModal = mockShowAlert;
  } else if (container === 'kuaishou') {
    globals.ks.showModal = mockShowAlert;
  } else if (container === 'baidu') {
    globals.swan.showModal = mockShowAlert;
  }

  const { alert } = require('../src/index');
  await alert({
    title: 'abc',
  });

  expect(mockShowAlert.mock.calls.length).toBe(1);
  expect(mockShowAlert.mock.calls[0][0].title).toBe('abc');
});
