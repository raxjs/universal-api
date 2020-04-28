import { Options } from '../types';

declare const my: any;

const alert = (options: Options): Promise<null> => {
  return new Promise((resolve, reject): void => {
    const { title, content, buttonText = '确定' } = options;
    my.alert({
      title,
      content,
      buttonText,
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
