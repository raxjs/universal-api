import {
  RequestOptions,
  ResponseData,
} from '../types';
import {normalize} from '../common';

function request(options: RequestOptions) {
  let { url, method, data, dataType, headers, timeout, success, fail, complete } = options;
  tt.request({
    url,
    headers,
    method,
    data,
    timeout,
    dataType,
    success: function(res: ResponseData) {
      success && success(res);
    },
    fail: function(res) {
      fail && fail(res);
    },
    complete(res) {
      complete && complete(res);
    }
  });
}
export default normalize(request);