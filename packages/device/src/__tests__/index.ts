import webModule from '../web';

jest.mock('universal-env', (): object => {
  return {
    isWeex: false,
    isWeb: true
  };
});

describe('In web', (): void => {
  it('Get screen width', () => {
    expect(webModule.screenWidth).toEqual(0);
  });

  it('Get screen height', () => {
    expect(webModule.screenHeight).toEqual(0);
  });
});
