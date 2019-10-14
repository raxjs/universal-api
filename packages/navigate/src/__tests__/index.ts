import Navigate from '../index';

jest.mock('universal-env', (): object => {
  return {
    isWeb: true
  };
});

describe('navigate to in web', (): void => {
  it('Push works with resolves', (): void => {
    // eslint-disable-next-line
    (global as any).window = Object.create(window);
    const url = 'https://github.com/';
    Object.defineProperty(window, 'location', {
      value: {
        href: url
      }
    });
    expect(Navigate.push({
      url: 'https://github.com/'
    })).resolves.toBe(void 0);
  });

  it('Pop works with resolves', (): void => {
    // eslint-disable-next-line
    (global as any).window.history = {
      go: (): void => {}
    };
    expect(Navigate.pop()).resolves.toBe(void 0);
  });

  it('works step value of -1 with resolves', (): void => {
    // eslint-disable-next-line
    (global as any).window.history = {
      go: (): void => {}
    };
    expect(Navigate.go({
      step: -1
    })).resolves.toBe(void 0);
  });
});
