import {createPromisifyImpl, isAliContainer, testPlatformAPI} from '@utils/__test__/util';

testPlatformAPI('location', ['wechat', 'ali', 'dingtalk', 'bytedance'], async (container, globals) => {
  const mockGetLocation = jest.fn(createPromisifyImpl());
  const mockOpenLocation = jest.fn(createPromisifyImpl());
  const mockChooseLocation = jest.fn(createPromisifyImpl());

  if (container === 'wechat') {
    globals.wx.getLocation = mockGetLocation;
    globals.wx.openLocation = mockOpenLocation;
    globals.wx.chooseLocation = mockChooseLocation;
  } else if (container === 'dingtalk') {
    globals.dd.getLocation = mockGetLocation;
    globals.dd.openLocation = mockOpenLocation;
    globals.dd.chooseLocation = mockChooseLocation;
  } else if (container === 'ali') {
    globals.my.getLocation = mockGetLocation;
    globals.my.openLocation = mockOpenLocation;
    globals.my.chooseLocation = mockChooseLocation;
  } else if (container === 'bytedance') {
    globals.tt.getLocation = mockGetLocation;
    globals.tt.openLocation = mockOpenLocation;
    globals.tt.chooseLocation = mockChooseLocation;
  }

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
