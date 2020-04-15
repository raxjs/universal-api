import confirm from '../../web';
import { Options } from '../../types';

test('Confirm in a web environment can return a Promise', async(): Promise<void> => {
  window.confirm = (message?: string): boolean => {
    return message ? true : false;
  };
  const options: Options = {
    title: 'Confirm title',
    content: 'Confirm content',
    confirmButtonText: 'confirm',
    cancelButtonText: 'cancel'
  };
  await expect(confirm(options)).resolves.toBe(true);
});
