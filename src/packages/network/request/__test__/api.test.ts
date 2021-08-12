import { createPromisifyImpl, testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('request', ['wechat', 'ali', 'dingtalk', 'bytedance', 'kuaishou', 'baidu'], async (container, globals, configAPI) => {
  const mockRequest = jest.fn(createPromisifyImpl());
  if (container === 'dingtalk') {
    globals.dd.httpRequest = mockRequest;
  } else {
    configAPI('request', mockRequest);
  }

  const { default: request } = require('../src/index');

  await request({ url: 'abc' });

  expect(mockRequest.mock.calls.length).toBe(1);
  expect(mockRequest.mock.calls[0][0]).toMatchObject({
    url: 'abc',
    timeout: 20000,
    method: 'GET',
    dataType: 'json',
  });
});
