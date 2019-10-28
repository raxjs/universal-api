// eslint-disable-next-line
(global as any).my = {
  navigateTo: () => {},
  getSystemInfoSync: () => {
    return {
      platform: 'android'
    };
  }
};

describe('Mni app environment', (): void => {
  it('mini app environment value', (): void => {
    // eslint-disable-next-line
    const { isMiniApp } = require('../index');
    expect(isMiniApp).toBeTruthy();
  });
});
