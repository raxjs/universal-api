import formatOriginal from './formatOriginal';

/**
 * Convert function to promise.
 * @param fn sync api function
 * @param options api params
 * @param responseMap response mapping
 * @param errorMap error mapping
 *
 * @returns Promise
 */
export default function promisifyFn(fn, options, responseMap?, errorMap?) {
  return new Promise((resolve, reject) => {
    const callbacks: any = {};
    ['success', 'fail', 'complete'].forEach(key => {
      callbacks[key] = options[key];
    });
    Object.assign(options, {
      success(res: any) {
        if (responseMap) {
          res = formatOriginal(res, responseMap);
        }
        callbacks.success && callbacks.success(res);
        resolve(res);
      },
      fail(err: any) {
        if (errorMap) {
          err = formatOriginal(err, errorMap);
        }
        callbacks.fail && callbacks.fail(err);
        reject(err);
      },
      complete() {
        callbacks.complete && callbacks.complete();
      },
    });
    fn(options);
  });
};
