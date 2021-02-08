jest.mock('@uni/env', (): object => {
  return {
    isMiniApp: true
  };
});

describe('navigate to in mini app', (): void => {
  it('Push works with promises', (): Promise<void> => {
    // eslint-disable-next-line
    (global as any).my = {
      navigateTo: (options): void => {
        options.success();
      }
    };
    const navigate = require('../').default;
    return expect(navigate.push({
      url: 'https://github.com/'
    })).resolves.toEqual(void 0);
  });

  it('Pop works with promises', (): Promise<void> => {
    // eslint-disable-next-line
    (global as any).my = {
      navigateBack: (options): void => {
        options.success();
      }
    };
    const navigate = require('../').default;
    return expect(navigate.pop()).resolves.toEqual(void 0);
  });


  it('tests error with promises', (): void => {
    // eslint-disable-next-line
    (global as any).my = {
      navigateTo: (options): void => {
        options.fail();
      }
    };
    const navigate = require('../').default;
    expect(navigate.push({
      url: 'https://github.com/'
    })).rejects.toEqual(void 0);
  });

  it('works step value of -1 with resolves', (): void => {
    // eslint-disable-next-line
    (global as any).my = {
      navigateBack: (options): void => {
        options.success();
      }
    };
    const navigate = require('../').default;
    expect(navigate.go({
      step: -1
    })).resolves.toEqual(void 0);
  });
});
