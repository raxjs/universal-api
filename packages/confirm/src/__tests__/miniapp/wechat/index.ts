import confirm from '../../../miniapp/wechat';
import { Options } from '../../../types';


(global as any).wx = {
  showModal: (options): void => {
    options.success({confirm: true});
  }
};

test('Confirm can return a Promise in a WeChat mini program', async(): Promise<void> => {
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
