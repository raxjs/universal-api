import { platform, appName, screenWidth, screenHeight, px2rpx } from '../index';

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
    expect(screenWidth).toBe(0);
  });
});
