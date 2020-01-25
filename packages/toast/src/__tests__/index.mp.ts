import Toast from '../index';

jest.mock('universal-env', (): object => {
  return {
    isWeex: false,
    isMiniApp: true,
    isWeb: false
  };
});

describe('Toast in miniapp', (): void => {
  it('show works with call', (): void => {
    const mockShow = jest.fn();
    (global as any).my = {
      showToast: mockShow
    };

    Toast.show('Hello World');
    expect(mockShow.mock.calls.length).toBe(1);
  });
});
