
jest.mock('universal-env', (): object => {
  return {
    isWeex: false,
    isWeb: false,
    isMiniApp: true,
  };
});


(global as any).my = {
  getSystemInfoSync: () => {
    return {
      screenWidth: 750
    };
  }
};

test('Choose image can return a promise in a mini app environment', (): void => {
  const { screenWidth } = require('../miniapp/ali').default;
  expect(screenWidth).toBe(750);
});
