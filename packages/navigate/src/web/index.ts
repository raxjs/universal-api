import { IPushOptions, IGoOptions, IPopOptions, IReplaceOptions } from '../types';


import {initApi} from '../common';

const push = initApi.push((options: IPushOptions) => {
  const { url, success, fail, complete } = options;
  setTimeout((): void => {
    try {
      location.href = url;
      success && success();
      complete && complete();
    } catch (e) {
      fail && fail(e);
      complete && complete(e);
    }
  });
});

const pop = initApi.pop((options?: IPopOptions) => {
  const { success, fail, complete } = options || {};
  setTimeout((): void => {
    try {
      history.go(-1);
      success && success();
      complete && complete();
    } catch (e) {
      fail && fail(e);
      complete && complete(e);
    }
  });
});

const replace = initApi.replace((options?: IReplaceOptions) => {
  const { url, success, fail, complete } = options || {};
  setTimeout((): void => {
    try {
      history.replaceState('', '', url);
      history.go(0);
      success && success();
      complete && complete();
    } catch (e) {
      fail && fail(e);
      complete && complete(e);
    }
  });
});

const go = initApi.go((options: IGoOptions) => {
  const { step, success, fail, complete } = options;

  if (step < 0) {
    setTimeout((): void => {
      history.go(options.step);
      success && success();
      complete && complete();
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
