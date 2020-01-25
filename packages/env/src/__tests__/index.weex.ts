(global as any).WXEnvironment = {
  platform: 'iOS'
};

describe('platform', (): void => {
  it('weex environment value', (): void => {
    const { isWeex } = require('..');
    expect(isWeex).toBeTruthy();
  });
});
