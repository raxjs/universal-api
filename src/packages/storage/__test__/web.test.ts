import { testWebAPI } from '@/utils/__test__/util';

testWebAPI('storage', async (globals) => {
  const localStorage = {
    _data: new Map<string, string>(),
    setItem: (key: string, value: any) => {
      localStorage._data.set(key, String(value));
    },
    getItem: (key: string): string => {
      return localStorage._data.get(key) ?? null;
    },
    removeItem: (key: string) => {
      localStorage._data.delete(key);
    },
    clear: () => {
      localStorage._data.clear();
    },
  };
  globals.localStorage = localStorage;
  Object.defineProperty(window, 'localStorage', {
    get(): any {
      return localStorage;
    },
  });

  const { getStorage, getStorageSync, setStorage, setStorageSync, removeStorage, removeStorageSync } = require('../src/index');

  await setStorage({
    key: 'a',
    data: { x: 1 },
  });
  await expect(getStorage({ key: 'a' })).resolves.toEqual({
    data: { x: 1 },
  });
  await removeStorage({ key: 'a' });
  await expect(getStorage({ key: 'a' })).resolves.toEqual({ data: null });

  setStorageSync({
    key: 'b',
    data: { y: 2 },
  });
  expect(getStorageSync({ key: 'b' })).toEqual({
    data: { y: 2 },
  });
  removeStorageSync({ key: 'b' });
  expect(getStorageSync({ key: 'b' })).toEqual({ data: null });
});
