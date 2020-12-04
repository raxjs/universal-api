import Clipboard from '../index';

jest.mock('universal-env', (): object => {
  return {
    isWeex: false,
    isWeb: true
  };
});

describe('Clipboard in web', (): void => {
  it('readText tests error with promises in web', (): void => {
    expect(Clipboard.readText()).rejects.toBe(void 0);
  });

  it('writeText works with resolves in web', (): void => {
    document.execCommand = jest.fn().mockReturnValue(true);
    expect(Clipboard.writeText('writeText')).resolves.toBe('writeText');
  });

  it('writeText tests error with promises in web', (): void => {
    document.execCommand = jest.fn().mockReturnValue(false);
    expect(Clipboard.writeText('writeText')).rejects.toBe(void 0);
  });
});
