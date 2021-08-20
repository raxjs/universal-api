import { createPromisifyImpl, testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('pageScrollTo', ['wechat', 'ali', 'bytedance', 'kuaishou', 'baidu'], async (container, globals, configAPI) => {
  const mockPageScrollTo = jest.fn(createPromisifyImpl());
  configAPI('pageScrollTo', mockPageScrollTo);

  const { default: pageScrollTo } = require('../src/index');
  await pageScrollTo({
    scrollTop: 100,
    selector: '#a',
  });

  expect(mockPageScrollTo.mock.calls.length).toBe(1);
  expect(mockPageScrollTo.mock.calls[0][0]).toMatchObject({
    scrollTop: 100,
    duration: 300,
    selector: undefined,
  });

  mockPageScrollTo.mockClear();
  await pageScrollTo({
    selector: '#b',
    duration: 100,
  });

  expect(mockPageScrollTo.mock.calls.length).toBe(1);
  expect(mockPageScrollTo.mock.calls[0][0]).toMatchObject({
    duration: 100,
    selector: '#b',
  });

  // unexpected duration
  mockPageScrollTo.mockClear();
  await pageScrollTo({
    scrollTop: 1,
    duration: -10,
  });

  expect(mockPageScrollTo.mock.calls.length).toBe(1);
  expect(mockPageScrollTo.mock.calls[0][0]).toMatchObject({
    scrollTop: 1,
    duration: 0,
  });

  // unexpected duration
  mockPageScrollTo.mockClear();
  await pageScrollTo({
    scrollTop: 1,
    duration: 'a' as any,
  });

  expect(mockPageScrollTo.mock.calls.length).toBe(1);
  expect(mockPageScrollTo.mock.calls[0][0]).toMatchObject({
    scrollTop: 1,
    duration: 0,
  });
});
