import alert from '../../../index';
import { Options } from '../../../types';

jest.mock('universal-env', (): object => {
  return {
    isWeex: false,
    isWeb: false,
    isMiniApp: true,
  };
});

// eslint-disable-next-line
(global as any).we = {
  showModal: (options): void => {
    options.success();
  }
};

test('Alert can return a promise in a WeChat mini program', (): void => {
  const options: Options = {
    title: 'alert title',
    content: 'alert content',
    buttonText: 'confirm',
  };

  expect(alert(options)).resolves.toBe(void 0);
});
