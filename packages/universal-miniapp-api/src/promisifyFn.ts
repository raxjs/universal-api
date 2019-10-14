import formatOriginal from './formatOriginal';

interface ICallBacks {
  success?: (res) => {};
  fail?: (err) => {};
  complete?: () => {};
}

export default function promisifyFn(fn, options, responseMap?, errorMap?) {
  return new Promise((resolve, reject) => {
    const callbacks: ICallBacks = {};
    ['success', 'fail', 'complete'].forEach(key => {
      callbacks[key] = options[key];
    });
    Object.assign(options, {
      success(res) {
        if (responseMap) {
          res = formatOriginal(res, responseMap);
        }
        callbacks.success && callbacks.success(res);
        resolve(res);
      },
      fail(err) {
        if (errorMap) {
          err = formatOriginal(err, responseMap);
        }
        callbacks.fail && callbacks.fail(err);
        reject(err);
      },
      complete() {
        callbacks.complete && callbacks.complete();
      }
    });
  });
}
