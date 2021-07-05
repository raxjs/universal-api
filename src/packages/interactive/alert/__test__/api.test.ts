import { createPromisifyImpl, testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('alert', ['wechat', 'ali', 'dingtalk', 'bytedance'], async (container, globals) => {
  const mockShowAlert = jest.fn(createPromisifyImpl());

  if (container === 'wechat') {
    globals.wx.showModal = mockShowAlert;
  } else if (container === 'dingtalk') {
    globals.dd.alert = mockShowAlert;
  } else if (container === 'ali') {
    globals.my.alert = mockShowAlert;
  } else if (container === 'bytedance') {
    globals.tt.showModal = mockShowAlert;
  }

  const { alert } = require('../src/index');
  await alert({
    title: 'abc',
  });

  expect(mockShowAlert.mock.calls.length).toBe(1);
  expect(mockShowAlert.mock.calls[0][0].title).toBe('abc');
});
