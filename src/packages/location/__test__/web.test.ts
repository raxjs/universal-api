import { testWebAPI } from '@/utils/__test__/util';

testWebAPI('location', async (globals) => {
  const { chooseLocation, openLocation, getLocation } = require('../src/index');

  expect(() => chooseLocation()).toThrow(/不支持/);
  expect(() => openLocation()).toThrow(/不支持/);

  const mockGetPosition = jest.fn((cb) => {
    setTimeout(() => {
      cb({
        coords: {
          latitude: 100,
          longitude: 200,
        },
      });
    }, 100);
  });
  globals.navigator = {
    geolocation: {
      getCurrentPosition: mockGetPosition,
    },
  };

  const result = await getLocation();
  expect(mockGetPosition.mock.calls.length).toBe(1);
  expect(result).toMatchObject({
    latitude: '100',
    longitude: '200',
  });
});
