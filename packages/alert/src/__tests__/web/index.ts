import alert from '../../index';
import { Options } from '../../types';

jest.mock('universal-env', (): object => {
  return {
    isWeex: false,
    isWeb: true
  };
});

test('Alert can return a Promise in web', (): void => {
  window.alert = (message?: string): boolean => {
    return message ? true : false;
  };
  const options: Options = {
    title: 'alert title',
    content: 'alert content',
    buttonText: 'confirm',
  };

  expect(alert(options)).resolves.toBe(void 0);
});
