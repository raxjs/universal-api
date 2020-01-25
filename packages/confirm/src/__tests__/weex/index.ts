import confirm from '../../weex';
import { Options } from '../../types';


(global as any).weex = {
  requireModule: require
};

jest.mock('modal', (): object => {
  return {
    confirm: (options, callback): void => {
      callback('confirm');
    }
  };
}, {virtual: true});

test('Confirm in a weex environment can return a Promise', async(): Promise<void> => {
  const options: Options = {
    title: 'Confirm title',
    content: 'Confirm content',
    confirmButtonText: 'confirm',
    cancelButtonText: 'cancel'
  };

  await confirm(options).then((value): void => {
    expect(value).toBeTruthy();
  });
});
