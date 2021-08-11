import { createPromisifyImpl, isAliContainer, testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('location', ['wechat', 'ali', 'dingtalk', 'bytedance', 'kuaishou', 'baidu'], async (container, globals, configAPI) => {
  const mockGetLocation = jest.fn(createPromisifyImpl());
  const mockOpenLocation = jest.fn(createPromisifyImpl());
  const mockChooseLocation = jest.fn(createPromisifyImpl());
  configAPI('getLocation', mockGetLocation);
  configAPI('openLocation', mockOpenLocation);
  configAPI('chooseLocation', mockChooseLocation);

  const { getLocation, openLocation, chooseLocation } = require('../src/index');

  await getLocation();
  expect(mockGetLocation.mock.calls.length).toBe(1);

  await openLocation({
    latitude: 1,
    longitude: 2,
  });
  expect(mockOpenLocation.mock.calls.length).toBe(1);
  if (isAliContainer(container)) {
    expect(mockOpenLocation.mock.calls[0][0]).toMatchObject({
      latitude: '1',
      longitude: '2',
    });
  } else {
    expect(mockOpenLocation.mock.calls[0][0]).toMatchObject({
      latitude: 1,
      longitude: 2,
    });
  }

  await chooseLocation({
    latitude: 3,
    longitude: 4,
  });
  expect(mockChooseLocation.mock.calls.length).toBe(1);
  expect(mockChooseLocation.mock.calls[0][0]).toMatchObject({
    latitude: 3,
    longitude: 4,
  });
});
