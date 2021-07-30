import { createNoop, testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('application', ['wechat', 'ali', 'dingtalk', 'bytedance'], (container, globals, configAPI) => {
  const mockGetApp = jest.fn();
  const mockGetCurrentPages = jest.fn();
  const mockGetLaunchOptionsSync = jest.fn();
  const mockOnError = jest.fn();
  const mockOffError = jest.fn();
  const mockOnUnhandledRejection = jest.fn();
  const mockOffUnhandledRejection = jest.fn();

  globals.getApp = mockGetApp;
  globals.getCurrentPages = mockGetCurrentPages;

  configAPI('onError', mockOnError);
  configAPI('offError', mockOffError);
  configAPI('onUnhandledRejection', mockOnUnhandledRejection);
  configAPI('offUnhandledRejection', mockOffUnhandledRejection);

  if (container === 'dingtalk') {
    globals.my.getLaunchOptionsSync = mockGetLaunchOptionsSync;
  } else {
    configAPI('getLaunchOptionsSync', mockGetLaunchOptionsSync);
  }

  const {
    getApp,
    getCurrentPages,
    getLaunchOptionsSync,
    onError,
    offError,
    onUnhandledRejection,
    offUnhandledRejection,
  } = require('../src/index');

  getApp();
  expect(mockGetApp.mock.calls.length).toBe(1);

  getCurrentPages();
  expect(mockGetCurrentPages.mock.calls.length).toBe(1);

  getLaunchOptionsSync();
  expect(mockGetLaunchOptionsSync.mock.calls.length).toBe(1);

  let cb = createNoop();
  onError(cb);
  expect(mockOnError.mock.calls).toEqual([[cb]]);

  cb = createNoop();
  offError(cb);
  expect(mockOffError.mock.calls).toEqual([[cb]]);

  cb = createNoop();
  onUnhandledRejection(cb);
  expect(mockOnUnhandledRejection.mock.calls).toEqual([[cb]]);

  cb = createNoop();
  offUnhandledRejection(cb);
  expect(mockOffUnhandledRejection.mock.calls).toEqual([[cb]]);
});
