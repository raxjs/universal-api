import { Options } from '../types';

const confirm = (options: Options): Promise<boolean> => {
  return new Promise((resolve): void => {
    const { content } = options;
    const confirm = window.confirm(content);
    confirm ? resolve(true) : resolve(false);
  });
};

export default confirm;
