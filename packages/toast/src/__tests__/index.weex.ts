import Toast from '../index';

jest.mock('universal-env', (): object => {
  return {
    isWeex: true,
    isWeb: false
  };
});

(global as any).weex = {
  requireModule: require
};

describe('Toast in weex', (): void => {
  it('show works with call', (): void => {
    const mockShow = jest.fn();
    jest.mock('modal', (): object => {
      return {
        toast: mockShow
      };
    }, {virtual: true});

    Toast.show('Hello World');
    expect(mockShow.mock.calls.length).toBe(1);
  });
});
