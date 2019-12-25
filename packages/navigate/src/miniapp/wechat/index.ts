import { IPushOptions, IGoOptions } from '../../types';

declare const wx: any;

const push = (options: IPushOptions): Promise<null> => {
  return new Promise((resolve, reject): void => {
    const { url } = options;
    wx.navigateTo({
      url,
      success: resolve,
      fail: reject
    });
  });
};

const pop = (): Promise<null> => {
  return new Promise((resolve, reject): void => {
    wx.navigateBack({
      delta: 1,
      success: resolve,
      fail: reject
    });
  });
};

const go = (options: IGoOptions): Promise<null> => {
  return new Promise((resolve, reject): void => {
    const { step } = options;
    if (step < 0) {
      wx.navigateBack({
        delta: Math.abs(step),
        success: resolve,
        fail: reject
      });
    } else {
      reject();
    }
  });
};

export default {
  push,
  pop,
  go
};
