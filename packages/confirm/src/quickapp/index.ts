import { Options } from '../types';

export interface Response {
  index: number;
}

const confirm = (options: Options): Promise<boolean> => {
  const {
    title = '',
    content = '',
    confirmButtonText = 'ok',
    cancelButtonText = 'cancel',
  } = options;
  const buttons = [
    {
      text: cancelButtonText,
      color: '#999999',
    },
    {
      text: confirmButtonText,
    },
  ];
  return new Promise((resolve, reject): void => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const prompt = require('@system.prompt');
    prompt.showDialog({
      title,
      message: content,
      autocancel: false,
      buttons,
      success: (res: Response) => {
        const { index } = res;
        resolve(Number(index) === 1);
      },
      cancel: reject,
    });
  });
};

export default confirm;
