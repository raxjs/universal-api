import { AsyncStorageOptions } from '../types';

declare const my: any;

const AsyncStorage: AsyncStorageOptions = {
  getItem: (key: string): Promise<string | null> => {
    return new Promise((resolve, reject): void => {
      my.getStorage({
        key,
        success: (res): void => {
          resolve(res.data);
        },
        fail: (e): void => {
          reject(e);
        }
      });
    });
  },
  setItem: (key: string, value: object | string): Promise<null> => {
    return new Promise((resolve, reject): void => {
      my.setStorage({
        key,
        data: value,
        success: (): void => {
          resolve(null);
        },
        fail: (e): void => {
          reject(e);
        }
      });
    });
  },
  removeItem: (key: string): Promise<null> => {
    return new Promise((resolve, reject): void => {
      my.removeStorage({
        key,
        success: (): void => {
          resolve(null);
        },
        fail: (e): void => {
          reject(e);
        }
      });
    });
  },
  getAllKeys: (): Promise<string[]> => {
    return new Promise((resolve, reject): void => {
      my.getStorageInfo({
        success: (res): void => {
          resolve(res.keys);
        },
        fail: (e): void => {
          reject(e);
        }
      });
    });
  },
  clear: (): Promise<null> => {
    return new Promise((resolve, reject): void => {
      my.clearStorage({
        success: (): void => {
          resolve(null);
        },
        fail: (e): void => {
          reject(e);
        }
      });
    });
  },
  length: (): Promise<number> => {
    return new Promise((resolve, reject): void => {
      my.getStorageInfo({
        success: (res): void => {
          resolve(res.keys.length);
        },
        fail: (e): void => {
          reject(e);
        }
      });
    });
  }
};


export default AsyncStorage;
