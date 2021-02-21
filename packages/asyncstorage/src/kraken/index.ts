import { AsyncStorage } from '../types';

declare const asyncStorage: any;

let storage: any = {};

if (typeof asyncStorage !== 'undefined' && asyncStorage) {
  storage = asyncStorage;
}

const AsyncStorage: AsyncStorage = {
  getItem: (key: string): Promise<string | null> => {
    return storage.getItem(key);
  },
  setItem: (key: string, value: string): Promise<null> => {
    return storage.setItem(key, value);
  },
  removeItem: (key: string): Promise<null> => {
    return storage.removeItem(key);
  },
  getAllKeys: (): Promise<string[]> => {
    return storage.getAllKeys();
  },
  clear: (): Promise<null> => {
    return storage.clear();
  },
  length: (): Promise<number> => {
    return new Promise((resolve, reject): void => {
      storage
        .getAllKeys()
        .then((keys) => {
          resolve(keys.length);
        })
        .catch(reject);
    });
  },
};

export default AsyncStorage;
