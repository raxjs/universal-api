import chooseImage from '../index';

jest.mock('universal-env', (): object => {
  return {
    isWeex: false,
    isWeb: false,
    isMiniApp: true,
  };
});

// eslint-disable-next-line
(global as any).my = {
  chooseImage: (options): void => {
    options.success({
      apFilePaths: ['success'],
    });
  }
};

test('Choose image can return a promise in a mini app environment', (): void => {
  expect(chooseImage()).resolves.toStrictEqual({
    apFilePaths: ['success'],
    data: ['success'],
  });
});
