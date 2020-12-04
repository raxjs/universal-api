import Clipboard from '../index';

jest.mock('universal-env', (): object => {
  return {
    isWeex: false,
    isMiniApp: true,
    isWeb: false
  };
});
// eslint-disable-next-line
(global as any).my = {
  getClipboard: (options): void => {
    options.success({
      text: 'readText'
    });
  },
  setClipboard: (options): void => {
    options.success('writeText');
  }
};

describe('Clipboard in weex', (): void => {
  it('readText works with resolves in miniapp', (): void => {
    expect(Clipboard.readText()).resolves.toBe('readText');
  });

  it('writeText works with resolves in miniapp', (): void => {
    expect(Clipboard.writeText('writeText')).resolves.toBe('writeText');
  });
});
