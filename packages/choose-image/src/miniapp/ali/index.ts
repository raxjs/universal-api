import { ChooseResult, Options } from '../../types';

declare const my: any;

const choose = (options: Options = {}): Promise<ChooseResult> => {
  return new Promise((resolve, reject): void => {
    const { count = 1, sourceType = ['camera', 'album'] }: Options = options;
    my.chooseImage({
      sourceType,
      count,
      success: (res) => {
        resolve(Object.assign({}, {
          data: res.apFilePaths
        }, res));
      },
      fail: (e) => {
        reject(e);
      }
    });
  });
};

export default choose;
