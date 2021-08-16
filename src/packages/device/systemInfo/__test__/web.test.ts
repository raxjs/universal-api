import { testWebAPI } from '@/utils/__test__/util';

testWebAPI('systemInfo', async (globals) => {
  globals.navigator = window.navigator;

  const { getInfoSync, getInfo } = require('../src/index');

  let info = getInfoSync();
  expect(info).toEqual(expect.objectContaining({
    pixelRatio: expect.any(Number),
    screenWidth: expect.any(Number),
    screenHeight: expect.any(Number),
    windowWidth: expect.any(Number),
    windowHeight: expect.any(Number),
    language: expect.any(String),
    version: expect.any(String),
    platform: expect.any(String),
  }));

  info = await getInfo();
  expect(info).toEqual(expect.objectContaining({
    pixelRatio: expect.any(Number),
    screenWidth: expect.any(Number),
    screenHeight: expect.any(Number),
    windowWidth: expect.any(Number),
    windowHeight: expect.any(Number),
    language: expect.any(String),
    version: expect.any(String),
    platform: expect.any(String),
  }));
});
