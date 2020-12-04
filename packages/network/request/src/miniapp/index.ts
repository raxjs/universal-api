import {
  RequestOptions,
  ResponseData,
  ERROR_REQUEST_ABORT
} from '../types';
import {
  object2json
} from '../utils';

declare const my: any;

export default function(options: RequestOptions): Promise<ResponseData> {
  return new Promise((resolve, reject) => {
    let { url, method, data, dataType, headers, timeout } = options;
    my.request({
      url,
      headers,
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
      }
    });
  });
}
