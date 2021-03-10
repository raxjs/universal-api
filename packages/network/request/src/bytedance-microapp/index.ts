import {
  RequestOptions,
  ResponseData,
} from '../types';
import { normalize } from '../common';

function request(options: RequestOptions) {
  const { url, method, data, dataType, headers, timeout, success, fail, complete } = options;
  tt.request({
    url,
    headers,
    method,
    data,
    timeout,
    dataType,
    success(res: ResponseData) {
      success && success(res);
    },
    fail(res) {
      fail && fail(res);
    },
    complete(res) {
      complete && complete(res);
    },
  });
}
export default normalize(request);
