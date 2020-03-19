import {
  RequestOptions,
  ResponseData,
  ERROR_REQUEST_ABORT,
  ERROR_REQUEST_TIMEOUT
} from '../types';
import {
  object2json
} from '../utils';

declare const wx: any;

export default function(options: RequestOptions): Promise<ResponseData> {
  return new Promise((resolve, reject) => {
    let { url, method, data, dataType, headers, timeout } = options;
    let timeoutTimer;

    const requestTask = wx.request({
      url,
      header: headers,
      method,
      data,
      timeout,
      dataType,
      success: function(res: ResponseData) {
        resolve(res);
      },
      fail: function(res) {
        reject({
          code: ERROR_REQUEST_ABORT.code,
          message: object2json(res)
        });
      },
      complete() {
        if (timeoutTimer) {
          clearTimeout(timeoutTimer);
        }
      }
    });

    if (timeout) {
      timeoutTimer = setTimeout(() => {
        requestTask.abort();
        reject(ERROR_REQUEST_TIMEOUT);
      }, timeout);
    }
  });
}
