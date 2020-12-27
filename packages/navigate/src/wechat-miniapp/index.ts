import { IPushOptions, IGoOptions, IPopOptions, IReplaceOptions } from '../types';
import {initApi} from '../common';

const push = initApi.push((options: IPushOptions) => {
  const { url, success, fail, complete } = options;
  wx.navigateTo({
    url,
    success: function() {
      success && success();
    },
    fail: function(res) {
      fail && fail(res);
    },
    complete(res) {
      complete && complete(res);
    }
  });
});

const pop = initApi.pop((options?: IPopOptions) => {
  const { success, fail, complete } = options || {};
  wx.navigateBack({
    delta: 1,
    success: function() {
      success && success();
    },
    fail: function(res) {
      fail && fail(res);
    },
    complete(res) {
      complete && complete(res);
    }
  });
});

const replace = initApi.replace((options?: IReplaceOptions) => {
  const { url, success, fail, complete } = options || {};
  wx.redirectTo({
    url,
    success: function() {
      success && success();
    },
    fail: function(res) {
      fail && fail(res);
    },
    complete(res) {
      complete && complete(res);
    }
  });
});

const go = initApi.go((options: IGoOptions) => {
  const { step, success, fail, complete } = options;
  if (step < 0) {
    wx.navigateBack({
      delta: Math.abs(step),
      success: function() {
        success && success();
      },
      fail: function(res) {
        fail && fail(res);
      },
      complete(res) {
        complete && complete(res);
      }
    });
  } else {
    fail && fail({errMsg: 'step不能大于或等于0'});
    complete && complete({errMsg: 'step不能大于或等于0'});
  }
});

export default {
  push,
  pop,
  replace,
  go
};
