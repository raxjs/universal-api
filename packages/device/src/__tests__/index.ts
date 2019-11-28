
jest.mock('universal-env', (): object => {
  return {
    isWeex: false,
    isWeb: true
  };
});

describe('In web', (): void => {
  // eslint-disable-next-line
  const { screenWidth, screenHeight } = require('../web').default;
  it('Get screen width', () => {
    expect(screenWidth).toEqual(0);
  });

  it('Get screen height', () => {
    expect(screenHeight).toEqual(0);
  });
});
