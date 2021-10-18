import {
  RequestOptions,
  ResponseData,
} from '../types';
import { isDingdingMiniapp } from '@utils/miniappEnvApp';
import { normalize } from '../common';
import { CONTAINER_NAME } from '@utils/constant';

function request(options: RequestOptions) {
  const { url, method, data, dataType, headers, timeout, success, fail, complete } = options;
  const httpRequest = isDingdingMiniapp ? dd.httpRequest : my.request;
  let _data: string | Record<string, any> = data;
  if (isDingdingMiniapp && headers['Content-Type'] === 'application/json' && typeof data !== 'string') {
    _data = JSON.stringify(data);
  }
  return httpRequest({
    url,
    headers,
    method,
    data: _data,
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
export default normalize(request, CONTAINER_NAME.ALIPAY);
