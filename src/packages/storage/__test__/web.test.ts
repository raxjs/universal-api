import { testWebAPI } from '@/utils/__test__/util';
import { mockLocalStorage } from '../../../utils/__test__/bom';

testWebAPI('storage', async (globals) => {
  mockLocalStorage(globals);

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
