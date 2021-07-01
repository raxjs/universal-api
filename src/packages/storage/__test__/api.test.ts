import { createPromisifyImpl, isAliContainer, testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('storage', ['wechat', 'ali', 'dingtalk', 'bytedance'], async (container, globals) => {
  const mockGetStorage = jest.fn(createPromisifyImpl());
  const mockGetStorageSync = jest.fn();
  const mockSetStorage = jest.fn(createPromisifyImpl());
  const mockSetStorageSync = jest.fn();
  const mockRemoveStorage = jest.fn(createPromisifyImpl());
  const mockRemoveStorageSync = jest.fn();

  if (container === 'wechat') {
    globals.wx.getStorage = mockGetStorage;
    globals.wx.getStorageSync = mockGetStorageSync;
    globals.wx.setStorage = mockSetStorage;
    globals.wx.setStorageSync = mockSetStorageSync;
    globals.wx.removeStorage = mockRemoveStorage;
    globals.wx.removeStorageSync = mockRemoveStorageSync;
  } else if (container === 'dingtalk') {
    globals.dd.getStorage = mockGetStorage;
    globals.dd.getStorageSync = mockGetStorageSync;
    globals.dd.setStorage = mockSetStorage;
    globals.dd.setStorageSync = mockSetStorageSync;
    globals.dd.removeStorage = mockRemoveStorage;
    globals.dd.removeStorageSync = mockRemoveStorageSync;
  } else if (container === 'ali') {
    globals.my.getStorage = mockGetStorage;
    globals.my.getStorageSync = mockGetStorageSync;
    globals.my.setStorage = mockSetStorage;
    globals.my.setStorageSync = mockSetStorageSync;
    globals.my.removeStorage = mockRemoveStorage;
    globals.my.removeStorageSync = mockRemoveStorageSync;
  } else if (container === 'bytedance') {
    globals.tt.getStorage = mockGetStorage;
    globals.tt.getStorageSync = mockGetStorageSync;
    globals.tt.setStorage = mockSetStorage;
    globals.tt.setStorageSync = mockSetStorageSync;
    globals.tt.removeStorage = mockRemoveStorage;
    globals.tt.removeStorageSync = mockRemoveStorageSync;
  }

  const {
    getStorage,
    getStorageSync,
    setStorage,
    setStorageSync,
    removeStorage,
    removeStorageSync,
  } = require('../src/index');

  await getStorage({ key: 'abc' });
  expect(mockGetStorage.mock.calls.length).toBe(1);
  expect(mockGetStorage.mock.calls[0][0].key).toBe('abc');

  await getStorageSync({ key: 'def' });
  expect(mockGetStorageSync.mock.calls.length).toBe(1);
  if (isAliContainer(container)) {
    expect(mockGetStorageSync.mock.calls[0][0].key).toBe('def');
  } else {
    expect(mockGetStorageSync.mock.calls[0][0]).toBe('def');
  }

  await setStorage({ key: 'ghi', data: 123 });
  expect(mockSetStorage.mock.calls.length).toBe(1);
  expect(mockSetStorage.mock.calls[0][0]).toMatchObject({ key: 'ghi', data: 123 });

  await setStorageSync({ key: 'jkl', data: 456 });
  expect(mockSetStorageSync.mock.calls.length).toBe(1);
  if (isAliContainer(container)) {
    expect(mockSetStorageSync.mock.calls[0][0]).toMatchObject({ key: 'jkl', data: 456 });
  } else {
    expect(mockSetStorageSync.mock.calls[0]).toEqual(['jkl', 456]);
  }

  await removeStorage({ key: 'mno' });
  expect(mockRemoveStorage.mock.calls.length).toBe(1);
  expect(mockRemoveStorage.mock.calls[0][0].key).toBe('mno');

  await removeStorageSync({ key: 'pqr' });
  expect(mockRemoveStorageSync.mock.calls.length).toBe(1);
  if (isAliContainer(container)) {
    expect(mockRemoveStorageSync.mock.calls[0][0].key).toBe('pqr');
  } else {
    expect(mockRemoveStorageSync.mock.calls[0][0]).toBe('pqr');
  }
});
