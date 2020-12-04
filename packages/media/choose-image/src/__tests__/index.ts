import chooseImage from '../index';

jest.mock('universal-env', (): object => {
  return {
    isWeex: false,
    isWeb: true
  };
});

describe('Choose image in web', (): void => {
  const mockFn = jest.fn();
  document.createElement = mockFn;
  chooseImage();
  it('Choose image create input', () => {
    expect(mockFn.mock.calls.length).toBe(1);
  });
});
