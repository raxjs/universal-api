import { createPromisifyImpl, testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('subscribeMessage', ['wechat', 'bytedance', 'kuaishou'], async (container, globals, configAPI) => {
  const mockSubscribeMessage = jest.fn(createPromisifyImpl());

  configAPI('requestSubscribeMessage', mockSubscribeMessage);

  const subscribeMessage = require('../src/index').default;

  await subscribeMessage({ tmplIds: ['1'] });
  expect(mockSubscribeMessage.mock.calls.length).toBe(1);
  expect(mockSubscribeMessage.mock.calls[0][0].tmplIds).toStrictEqual(['1']);
});
