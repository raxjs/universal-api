import AsyncStorage from '../index';

jest.mock('universal-env', (): object => {
  return {
    isWeex: false,
    isWeb: true
  };
});

describe('asyncstorage', (): void => {
  it('setItem', (): Promise<void> => {
    return AsyncStorage.setItem('foo', 'bar').then((val): void => {
      expect(val).toBe(null);
    });
  });

  it('getItem', (): Promise<void> => {
    return AsyncStorage.getItem('foo').then((val): void => {
      expect(val).toBe('bar');
    });
  });

  it('length', (): Promise<void> => {
    return AsyncStorage.length().then((val): void => {
      expect(val).toBe(1);
    });
  });

  it('removeItem', (): Promise<void> => {
    return AsyncStorage.removeItem('foo').then((val): void => {
      expect(val).toBe(null);
    });
  });

  it('clear', (): Promise<void> => {
    return AsyncStorage.setItem('foo', 'bar').then((): Promise<void> => {
      return AsyncStorage.setItem('bar', 'foo');
    }).then((): Promise<void> => {
      return AsyncStorage.clear().then((val): void => {
        expect(val).toBe(null);
      });
    });
  });

  it('getAllKeys', (): Promise<void> => {
    return AsyncStorage.setItem('foo1', 'bar').then((): Promise<void> => {
      return AsyncStorage.setItem('bar1', 'foo');
    }).then((): Promise<void> => {
      return AsyncStorage.getAllKeys().then((val): void => {
        expect(val).toEqual(['foo1', 'bar1']);
      });
    });
  });
});
