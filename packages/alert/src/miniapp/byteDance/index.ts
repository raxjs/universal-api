import { Options } from '../../types';

declare const tt: any;

const alert = (options: Options): Promise<null> => {
  return new Promise((resolve, reject): void => {
    const { title = '', content = '', buttonText = '确定' } = options;
    tt.showModal({
      title,
      content,
      showCancel: false,
      confirmText: buttonText,
      success: (): void => {
        resolve();
      },
      fail: (): void => {
        reject();
      }
    });
  });
};

export default alert;
