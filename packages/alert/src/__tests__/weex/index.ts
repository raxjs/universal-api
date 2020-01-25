import alert from '../../index';
import { Options } from '../../types';

jest.mock('universal-env', (): object => {
  return {
    isWeex: true,
    isWeb: false
  };
});


(global as any).weex = {
  requireModule: require
};

jest.mock('modal', (): object => {
  return {
    alert: (options, callback): void => {
      callback();
    }
  };
}, {virtual: true});

test('Alert can return a promise in a weex environment', (): void => {
  const options: Options = {
    title: 'alert title',
    content: 'alert content',
    buttonText: 'confirm',
  };
  expect(alert(options)).resolves.toBe(void 0);
});
