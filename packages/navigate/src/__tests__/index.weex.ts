jest.mock('@uni/env', (): object => {
  return {
    isWeex: true
  };
});

// eslint-disable-next-line
(global as any).weex = {
  requireModule: require
};

jest.mock('navigator', (): object => {
  return {
    push: (options, callback): void => {
      callback();
    },
    pop: (options, callback): void => {
      callback();
    }
  };
}, {virtual: true});

describe('navigate to in weex', (): void => {
  it('Push works with resolves', (): void => {
    const Navigate = require('../').default;
    expect(Navigate.push({
      url: 'https://github.com/'
    })).resolves.toEqual(void 0);
  });

  it('Pop works with resolves', (): void => {
    const Navigate = require('../').default;
    expect(Navigate.pop()).resolves.toEqual(void 0);
  });

  it('Go works step value of -1 with resolves', (): void => {
    const Navigate = require('../').default;
    expect(Navigate.go({
      step: -1
    })).resolves.toEqual(void 0);
  });

  it('tests error step value of 0 with go rejects', (): void => {
    const Navigate = require('../').default;
    expect(Navigate.go({
      step: 0
    })).rejects.toEqual(void 0);
  });
});

