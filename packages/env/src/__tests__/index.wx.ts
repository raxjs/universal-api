(global as any).wx = {
  login() {}
};

describe('Wechat MiniProgram environment', (): void => {
  it('value', (): void => {
    const { isWeChatMiniProgram } = require('..');
    expect(isWeChatMiniProgram).toBeTruthy();
  });
});
