// eslint-disable-next-line
(global as any).weex = {
  requireModule: require
};

jest.mock('storage', (): object => {
  var storage = {};

  return {
    getItem: (key, callback): void => {
      callback({
        data: storage[key],
        result: 'success'
      });
    },
    setItem: (key, value, callback): void => {
      storage[key] = value;
      callback({
        data: null,
        result: 'success'
      });
    },
    length: (callback): void => {
      callback({
        data: Object.keys(storage).length,
        result: 'success'
      });
    },
    removeItem: (key, callback): void => {
      delete storage[key];
      callback({
        data: null,
        result: 'success'
      });
    },
    getAllKeys: (callback): void => {
      callback({
        data: Object.keys(storage),
        result: 'success'
      });
    }
  };
}, {virtual: true});

describe('AsyncStorage in weex', (): void => {
  it('setItem', (): Promise<null> => {
    const AsyncStorage = require('../weex').default;
    return AsyncStorage.setItem('foo', 'bar').then((val): void => {
      expect(val).toBe(null);
    });
  });

  it('getItem', (): Promise<null> => {
    const AsyncStorage = require('../weex').default;
    return AsyncStorage.getItem('foo').then((val): void => {
      expect(val).toBe('bar');
    });
  });

  it('length', (): Promise<null> => {
    const AsyncStorage = require('../weex').default;
    return AsyncStorage.length().then((val): void => {
      expect(val).toBe(1);
    });
  });

  it('removeItem', (): Promise<null> => {
    const AsyncStorage = require('../weex').default;
    return AsyncStorage.removeItem('foo').then((val): void => {
      expect(val).toBe(null);
    });
  });

  it('clear', (): Promise<null> => {
    const AsyncStorage = require('../weex').default;
    return AsyncStorage.setItem('foo', 'bar').then((): Promise<null> => {
      return AsyncStorage.setItem('bar', 'foo');
    }).then((): Promise<null> => {
      return AsyncStorage.clear().then((val): void => {
        expect(val).toBe(null);
      });
    });
  });

  it('getAllKeys', (): Promise<null> => {
    const AsyncStorage = require('../weex').default;

    return AsyncStorage.setItem('foo1', 'bar').then((): Promise<null> => {
      return AsyncStorage.setItem('bar1', 'foo');
    }).then((): Promise<null> => {
      return AsyncStorage.getAllKeys().then((val): void => {
        expect(val).toEqual(['foo1', 'bar1']);
      });
    });
  });
});
