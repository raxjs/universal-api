(global as any).my = {
  alert() {}
};

describe('Mini App environment', (): void => {
  it('value', (): void => {
    const { isMiniApp } = require('..');
    expect(isMiniApp).toBeTruthy();
  });
});
