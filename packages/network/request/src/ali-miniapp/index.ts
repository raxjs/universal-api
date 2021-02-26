import {
  RequestOptions,
  ResponseData,
} from '../types';
import { isDingdingMiniapp } from '../../../../utils/miniappEnvApp';
import {normalize} from '../common';

function request(options: RequestOptions) {
  let { url, method, data, dataType, headers, timeout, success, fail, complete } = options;
  const request = isDingdingMiniapp ? dd.httpRequest : my.request;
  return request({
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