import { Options } from '../types';

declare const weex: any;

const alert = (options: Options): Promise<null> => {
  return new Promise((resolve): void => {
    const modal = weex.requireModule('modal');
    const { content, buttonText } = options;
    modal.alert({
      message: content,
      okTitle: buttonText
    }, function(): void {
      resolve();
    });
  });
};

export default alert;
