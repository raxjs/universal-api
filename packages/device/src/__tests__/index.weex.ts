import weexModule from '../weex';

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
// eslint-disable-next-line
(global as any).window = {
  screen: {
    width: 750
  },
  devicePixelRatio: 2
};

describe('In a weex environment', (): void => {
  it('Get screen width', () => {
    expect(weexModule.screenWidth).toBe(0);
  });
});
