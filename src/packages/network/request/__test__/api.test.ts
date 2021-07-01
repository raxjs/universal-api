import { createPromisifyImpl, testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('request', ['wechat', 'ali', 'dingtalk', 'bytedance'], async (container, globals) => {
  const mockRequest = jest.fn(createPromisifyImpl());

  if (container === 'wechat') {
    globals.wx.request = mockRequest;
  } else if (container === 'dingtalk') {
    globals.dd.httpRequest = mockRequest;
  } else if (container === 'ali') {
    globals.my.request = mockRequest;
  } else if (container === 'bytedance') {
    globals.tt.request = mockRequest;
  }

  const { default: request } = require('../src/index');

  await request({
    url: 'abc',
  });

  expect(mockRequest.mock.calls.length).toBe(1);
  expect(mockRequest.mock.calls[0][0]).toMatchObject({
    url: 'abc',
    timeout: 20000,
    method: 'GET',
    dataType: 'json',
  });
});
