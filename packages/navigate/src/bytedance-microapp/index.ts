import { IPushOptions, IGoOptions } from '../types';

declare const tt: any;

const push = (options: IPushOptions): Promise<null> => {
  return new Promise((resolve, reject): void => {
    const { url } = options;
    tt.navigateTo({
      url,
      success: resolve,
      fail: reject
    });
  });
};

const pop = (): Promise<null> => {
  return new Promise((resolve, reject): void => {
    tt.navigateBack({
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
      tt.navigateBack({
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
