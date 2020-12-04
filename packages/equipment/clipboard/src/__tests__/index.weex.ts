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
const ClipboardModule = require('../index').default;

jest.mock('clipboard', (): object => {
  return {
    getString: (callback): void => {
      callback({
        data: 'readText'
      });
    },
    setString: (): void => {
    }
  };
}, {virtual: true});

describe('Clipboard in weex', (): void => {
  it('readText works with resolves in weex', (): void => {
    expect(ClipboardModule.readText()).resolves.toBe('readText');
  });

  it('writeText works with resolves in weex', (): void => {
    expect(ClipboardModule.writeText('writeText')).resolves.toBe('writeText');
  });
});
