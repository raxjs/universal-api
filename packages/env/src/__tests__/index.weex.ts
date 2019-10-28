// eslint-disable-next-line
(global as any).WXEnvironment = {
  platform: 'iOS'
};

// eslint-disable-next-line
const { isWeex } = require('../index');

describe('platform', (): void => {
  it('weex environment value', (): void => {
    expect(isWeex).toBeTruthy();
  });
});
