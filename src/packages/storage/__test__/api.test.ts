import { createPromisifyImpl, isAliContainer, testPlatformAPI } from '@utils/__test__/util';

testPlatformAPI('storage', ['wechat', 'ali', 'dingtalk', 'bytedance'], async (container, globals, configAPI) => {
  const mockGetStorage = jest.fn(createPromisifyImpl());
  const mockGetStorageSync = jest.fn();
  const mockSetStorage = jest.fn(createPromisifyImpl());
  const mockSetStorageSync = jest.fn();
  const mockRemoveStorage = jest.fn(createPromisifyImpl());
  const mockRemoveStorageSync = jest.fn();
  configAPI('getStorage', mockGetStorage);
  configAPI('getStorageSync', mockGetStorageSync);
  configAPI('setStorage', mockSetStorage);
  configAPI('setStorageSync', mockSetStorageSync);
  configAPI('removeStorage', mockRemoveStorage);
  configAPI('removeStorageSync', mockRemoveStorageSync);

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
