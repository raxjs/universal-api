import { ChooseResult, Options } from '../../types';

declare const wx: any;

const choose = (options: Options = {}): Promise<ChooseResult> => {
  return new Promise((resolve, reject): void => {
    const { count = 1, sourceType = ['camera', 'album'], sizeType }: Options = options;
    wx.chooseImage({
      sourceType,
      count,
      sizeType,
      success: (res) => {
        resolve(Object.assign({}, {
          data: res.tempFilePaths
        }, res));
      },
      fail: (e) => {
        reject(e);
      }
    });
  });
};

export default choose;
