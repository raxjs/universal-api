import { Options } from '../types';

declare const my: any;

const confirm = (options: Options): Promise<boolean> => {
  return new Promise((resolve, reject): void => {
    const { title = '', content = '', confirmButtonText = '', cancelButtonText = '' } = options;
    my.confirm({
      title,
      content,
      confirmButtonText,
      cancelButtonText,
      success: ({ confirm }): void => {
        confirm ? resolve(true) : resolve(false);
      },
      fail: (): void => {
        reject();
      }
    });
  });
};

export default confirm;
