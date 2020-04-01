import { Options } from '../../types';

declare const tt: any;

const confirm = (options: Options): Promise<boolean> => {
  return new Promise((resolve, reject): void => {
    const { title = '', content = '', confirmButtonText = '确定', cancelButtonText = '取消' } = options;
    tt.showModal({
      title,
      content,
      confirmText: confirmButtonText,
      cancelText: cancelButtonText,
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
