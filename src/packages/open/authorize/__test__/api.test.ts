import { createPromisifyImpl, isAliContainer, testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('authorize', ['wechat', 'ali', 'bytedance', 'kuaishou', 'baidu'], async (container, globals, configAPI) => {
  const mockAuthorize = jest.fn(createPromisifyImpl());


  if (isAliContainer(container)) {
    configAPI('getAuthCode', mockAuthorize);
  } else {
    configAPI('authorize', mockAuthorize);
  }

  const authorize = require('../src/index').default;

  await authorize({ scope: 'scope.userInfo' });
  expect(mockAuthorize.mock.calls.length).toBe(1);
  if (isAliContainer(container)) {
    expect(mockAuthorize.mock.calls[0][0].scopes).toBe('auth_user');
  } else {
    expect(mockAuthorize.mock.calls[0][0].scope).toBe('scope.userInfo');
  }
});
