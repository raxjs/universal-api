import { Options } from '../types';

const alert = (options: Options): Promise<null> => {
  return new Promise((resolve): void => {
    const { content } = options;
    window.alert(content);
    resolve();
  });
};

export default alert;
