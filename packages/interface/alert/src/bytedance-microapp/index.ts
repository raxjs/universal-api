import { Options } from '../types';

declare const tt: any;

const alert = (options: Options): Promise<null> => {
  return new Promise((resolve, reject): void => {
    const { title = '', content = '', buttonText = '确定' } = options;
    tt.showModal({
      showCancel: false,
      ...options,
      title,
      content,
      confirmText: buttonText,
      success: (result): void => {
        resolve(result);
      },
      fail: (): void => {
        reject();
      }
    });
  });
};

export default alert;
