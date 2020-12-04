import chooseImage from '../index';

jest.mock('universal-env', (): object => {
  return {
    isWeex: true,
    isWeb: false
  };
});

// eslint-disable-next-line
(global as any).weex = {
  requireModule: require
};

test('Choose image can return a promise in a weex environment', (): void => {
  expect(chooseImage()).rejects.toEqual(void 0);
});
