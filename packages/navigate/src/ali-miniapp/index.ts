import { IPushOptions, IGoOptions, IPopOptions, IReplaceOptions, IReLaunchOptions } from '../types';
import { normalize } from '../common';

export const push = normalize.push((options: IPushOptions) => {
  const { url, success, fail, complete } = options;
  my.navigateTo({
    url,
    success() {
      success && success();
    },
    fail(res) {
      fail && fail(res);
    },
    complete(res) {
      complete && complete(res);
    },
  });
});

export const back = normalize.back((options?: IPopOptions) => {
  const { success, fail, complete } = options || {};
  my.navigateBack({
    delta: 1,
    success() {
      success && success();
    },
    fail(res) {
      fail && fail(res);
    },
    complete(res) {
      complete && complete(res);
    },
  });
});

export const replace = normalize.replace((options?: IReplaceOptions) => {
  const { url, success, fail, complete } = options || {};
  my.redirectTo({
    url,
    success() {
      success && success();
    },
    fail(res) {
      fail && fail(res);
    },
    complete(res) {
      complete && complete(res);
    },
  });
});

export const go = normalize.go((options: IGoOptions) => {
  const { step, success, fail, complete } = options;
  if (step < 0) {
    my.navigateBack({
      delta: Math.abs(step),
      success() {
        success && success();
      },
      fail(res) {
        fail && fail(res);
      },
      complete(res) {
        complete && complete(res);
      },
    });
  } else {
    fail && fail({ errMsg: 'step不能大于或等于0' });
    complete && complete({ errMsg: 'step不能大于或等于0' });
  }
});
export const reLaunch = normalize.reLaunch((options: IReLaunchOptions) => {
  const { url, success, fail, complete } = options;
  my.reLaunch({
    url,
    success() {
      success && success();
    },
    fail(res) {
      fail && fail(res);
    },
    complete(res) {
      complete && complete(res);
    },
  });
});

export default {
  push,
  back,
  reLaunch,
  replace,
  go,
};
