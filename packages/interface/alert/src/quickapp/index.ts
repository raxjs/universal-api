import { Options } from '../types';
import { isQuickApp } from 'universal-env';
import otherModule from '../index';

let exportModule = {};

const alert = (options: Options = {}): Promise<null> => {
  const { title = '', content = '', buttonText = '确定' } = options;
  const buttons = [
    {
      text: buttonText
    }
  ];
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const prompt = require('@system.prompt');
    prompt.showDialog({
      title,
      message: content,
      buttons,
      autocancel: false,
      success: (): void => {
        resolve();
      },
      cancel: (): void => {
        reject();
      }
    });
  });
};

if (isQuickApp) {
  exportModule = alert;
} else {
  exportModule = otherModule;
}

export default exportModule;
