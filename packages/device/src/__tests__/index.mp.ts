
jest.mock('universal-env', (): object => {
  return {
    isWeex: false,
    isWeb: false,
    isMiniApp: true,
  };
});

// eslint-disable-next-line
(global as any).my = {
  getSystemInfoSync: () => {
    return {
      screenWidth: 750
    };
  }
};

test('Choose image can return a promise in a mini app environment', (): void => {
  // eslint-disable-next-line
  const { screenWidth } = require('../miniapp/ali').default;
  expect(screenWidth).toBe(750);
});
