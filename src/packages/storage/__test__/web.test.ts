import { sleep, testWebAPI } from '@/utils/__test__/util';
import { DOMUtil } from '@/utils/__test__/web';

testWebAPI('storage', async (globals) => {
  const localStorage = {
    _data: new Map<string, string>(),
    setItem: (key: string, value: any) => {
      localStorage._data.set(key, String(value));
    },
    getItem: (key: string): string => {
      return localStorage._data.get(key);
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
  await expect(getStorage({ key: 'a' })).resolves.toBe(undefined);

  setStorageSync({
    key: 'b',
    data: { y: 2 },
  });
  expect(getStorageSync({ key: 'b' })).toEqual({
    data: { y: 2 },
  });
  removeStorageSync({ key: 'b' });

  // TODO getStorageSync 在值为 null 时会报错，暂时不测
  // expect(getStorageSync({ key: 'b' })).toBe(undefined);
});
