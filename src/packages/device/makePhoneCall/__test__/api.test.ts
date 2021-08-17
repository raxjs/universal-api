import { createPromisifyImpl, testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('makePhoneCall', ['wechat', 'ali', 'dingtalk', 'bytedance', 'kuaishou', 'baidu'], async (container, globals, configAPI) => {
  const mockMakePhoneCall = jest.fn(container === 'ali' ? undefined : createPromisifyImpl());

  if (container === 'dingtalk') {
    globals.dd.showCallMenu = mockMakePhoneCall;
  } else {
    configAPI('makePhoneCall', mockMakePhoneCall);
  }

  const { default: makePhoneCall } = require('../src/index');
  await makePhoneCall({
    phoneNumber: '123',
  });

  expect(mockMakePhoneCall.mock.calls.length).toBe(1);
  if (container === 'ali') {
    expect(mockMakePhoneCall.mock.calls[0][0].number).toBe('123');
  } else {
    expect(mockMakePhoneCall.mock.calls[0][0].phoneNumber).toBe('123');
  }

  if (container === 'dingtalk') {
    mockMakePhoneCall.mockClear();
    await makePhoneCall({
      phoneNumber: '456',
      showDingCall: true,
      code: '+12',
    });
    expect(mockMakePhoneCall.mock.calls[0][0]).toMatchObject({
      phoneNumber: '456',
      showDingCall: true,
      code: '+12',
    });
  }
});
