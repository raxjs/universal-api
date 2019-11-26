import { AsyncStorage } from '../types';

let storage: any = {};

if (typeof localStorage !== 'undefined' && localStorage) {
  storage = localStorage;
}

const AsyncStorage: AsyncStorage = {
  getItem: (key: string): Promise<string | null> => {
    return new Promise((resolve, reject): void => {
      if (storage.getItem) {
        const value: string | null = storage.getItem(key);
        resolve(value);
      } else {
        reject();
      }
    });
  },
  setItem: (key: string, value: string): Promise<null> => {
    return new Promise((resolve, reject): void => {
      if (storage.setItem) {
        storage.setItem(key, value);
        resolve(null);
      } else {
        reject();
      }
    });
  },
  removeItem: (key: string): Promise<null> => {
    return new Promise((resolve, reject): void => {
      if (storage.removeItem) {
        storage.removeItem(key);
        resolve(null);
      } else {
        reject();
      }
    });
  },
  getAllKeys: (): Promise<string[]> => {
    return new Promise((resolve): void => {
      if (storage.length) {
        resolve(Object.keys(storage));
      } else {
        resolve([]);
      }
    });
  },
  clear: (): Promise<null> => {
    return new Promise((resolve, reject): void => {
      if (storage.clear) {
        storage.clear();
        resolve(null);
      } else {
        AsyncStorage.getAllKeys().then((keys: string[]): void => {
          Promise.all(keys.map((key): Promise<null> => {
            return AsyncStorage.removeItem(key);
          })).then((): void => resolve(null)).catch(reject);
        });
      }
    });
  },
  length: (): Promise<number> => {
    return new Promise((resolve): void => {
      if (storage.length != null) {
        resolve(storage.length);
      } else {
        resolve(0);
      }
    });
  }
};

export default AsyncStorage;
