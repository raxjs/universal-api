import { isWeb, isNode, isMiniApp } from '..';

describe('environment value', (): void => {
  it('web environment value is true', (): void => {
    expect(isWeb).toBeTruthy();
  });

  it('node environment value is boolean', (): void => {
    expect(typeof isNode).toEqual('boolean');
  });

  it('mini app environment value is boolean', (): void => {
    expect(typeof isMiniApp).toEqual('boolean');
  });
});
