import { AsyncStorage } from '../types';
import { isWeex } from 'universal-env';

// eslint-disable-next-line
declare const __weex_require__: any;
let storage = {} as any;
if (isWeex) {
  storage = __weex_require__('@weex-module/storage');
}

const AsyncStorage: AsyncStorage = {
  getItem: (key: string): Promise<string | null> => {
    return new Promise((resolve, reject) => {
      storage.getItem(key, ({ data, result }) => {
        if (result === 'success') {
          resolve(data);
        } else {
          resolve(null);
        }
      });
    });
  },
  setItem: (key: string, value: string): Promise<null> => {
    return new Promise((resolve, reject) => {
      storage.setItem(key, value, ({ data, result }) => {
        if (result === 'success') {
          resolve(data);
        } else {
          reject(data);
        }
      });
    });
  },
  removeItem: (key: string): Promise<null> => {
    return new Promise((resolve, reject) => {
      storage.removeItem(key, ({ data, result }) => {
        if (result === 'success') {
          resolve(data);
        } else {
          reject(data);
        }
      });
    });
  },
  getAllKeys: (): Promise<string[]> => {
    return new Promise((resolve, reject) => {
      storage.getAllKeys(({ data, result }) => {
        if (result === 'success') {
          resolve(data);
        } else {
          reject(data);
        }
      });
    });
  },
  clear: (): Promise<null> => {
    return new Promise((resolve, reject) => {
      AsyncStorage.getAllKeys().then((keys) => {
        Promise.all(keys.map((key) => {
          return AsyncStorage.removeItem(key);
        })).then(() => resolve(null)).catch(reject);
      });
    });
  },
  length: (): Promise<number> => {
    return new Promise((resolve, reject) => {
      storage.length(({ data, result }) => {
        if (result === 'success') {
          resolve(data);
        } else {
          reject(data);
        }
      });
    });
  }
};

export default AsyncStorage;
