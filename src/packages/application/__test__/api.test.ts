import { createNoop, testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('application', ['wechat', 'ali', 'dingtalk', 'bytedance'], (container, globals) => {
  const mockGetApp = jest.fn();
  const mockGetCurrentPages = jest.fn();
  const mockGetLaunchOptionsSync = jest.fn();
  const mockOnError = jest.fn();
  const mockOffError = jest.fn();
  const mockOnUnhandledRejection = jest.fn();
  const mockOffUnhandledRejection = jest.fn();

  globals.getApp = mockGetApp;
  globals.getCurrentPages = mockGetCurrentPages;

  if (container === 'wechat') {
    globals.wx.getLaunchOptionsSync = mockGetLaunchOptionsSync;
    globals.wx.onError = mockOnError;
    globals.wx.offError = mockOffError;
    globals.wx.onUnhandledRejection = mockOnUnhandledRejection;
    globals.wx.offUnhandledRejection = mockOffUnhandledRejection;
  } else if (container === 'dingtalk') {
    globals.my.getLaunchOptionsSync = mockGetLaunchOptionsSync;
    globals.dd.onError = mockOnError;
    globals.dd.offError = mockOffError;
    globals.dd.onUnhandledRejection = mockOnUnhandledRejection;
    globals.dd.offUnhandledRejection = mockOffUnhandledRejection;
  } else if (container === 'ali') {
    globals.my.getLaunchOptionsSync = mockGetLaunchOptionsSync;
    globals.my.onError = mockOnError;
    globals.my.offError = mockOffError;
    globals.my.onUnhandledRejection = mockOnUnhandledRejection;
    globals.my.offUnhandledRejection = mockOffUnhandledRejection;
  } else if (container === 'bytedance') {
    globals.tt.getLaunchOptionsSync = mockGetLaunchOptionsSync;
    globals.tt.onError = mockOnError;
    globals.tt.offError = mockOffError;
    globals.tt.onUnhandledRejection = mockOnUnhandledRejection;
    globals.tt.offUnhandledRejection = mockOffUnhandledRejection;
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
