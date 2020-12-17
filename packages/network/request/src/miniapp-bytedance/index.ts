import {
  RequestOptions,
  ResponseData,
} from '../types';

export default function(options: RequestOptions) {
  // return new Promise((resolve, reject) => {
  let { url, method, data, dataType, headers, timeout, success, fail, complete, onSuccess, onFail, onComplete } = options;
  tt.request({
    url,
    headers,
    method,
    data,
    timeout,
    dataType,
    success: function(res: ResponseData) {
      success && success(res);
      onSuccess && onSuccess(res);
    },
    fail: function(res) {
      fail && fail(res);
      onFail && onFail(res);
    },
    complete(res) {
      complete && complete(res);
      onComplete && onComplete(res);
    }
  });
}
