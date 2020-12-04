import {
  RequestOptions,
  AsObject,
  ResponseData,
  DATA_TYPE,
  ERROR_REQUEST_ABORT,
} from '../types';
import {
  applyParamToURL,
  object2json,
  checkIsApplyDataToURL
} from '../utils';

export interface WeexRequestOptions extends RequestOptions {
  body?: string;
  type?: 'json' | 'text' | 'jsonp';
  isJSONP?: boolean;
}

export interface WeexResponse {
  status: number; // 返回的状态码
  ok: boolean; // 如果状态码在 200-299 之间就为 true
  statusText: string; // 状态描述文本
  data: string; // 返回的数据，如果请求类型是 json 和 jsonp，则它就是一个 object ，否则是一个 string。
  headers: AsObject; // HTTP 响应头
}

export default function weexRequest(options: WeexRequestOptions): Promise<ResponseData> {
  const Stream = __weex_require__('@weex-module/stream');
  return new Promise((resolve, reject) => {
    const requestOptions: WeexRequestOptions = Object.assign({}, options);
    let { url, method, data, dataType, headers } = requestOptions;

    if (method === 'GET' && data || checkIsApplyDataToURL(headers)) {
      requestOptions.url = applyParamToURL(data, url);
    } else if (data) {
      requestOptions.body = object2json(data);
    }

    if (requestOptions.isJSONP) {
      requestOptions.type = 'jsonp';
      delete requestOptions.isJSONP;
    } else if (dataType === DATA_TYPE.json) {
      requestOptions.type = 'json';
    } else {
      requestOptions.type = 'text';
    }

    Stream.fetch(requestOptions, (response: WeexResponse) => {
      try {
        if (typeof response === 'string') {
          // parse the response（it is string in weex-android & obj in ios）
          response = JSON.parse(response);
          if (response.data && typeof response.data === 'string' && response.ok) {
            try {
              response.data = JSON.parse(response.data);
            } catch (e) {
              throw new Error('the response.data in not valid json');
            }
          }
        }
        if (response.ok !== true) {
          throw response;
        }
        resolve({
          headers: response.headers,
          status: response.status,
          data: response.data
        });
      } catch (error) {
        reject({
          code: ERROR_REQUEST_ABORT.code,
          message: object2json(error)
        });
      }
    }, (progress) => {
      if (progress.status === 'FAILED') reject({
        code: ERROR_REQUEST_ABORT.code,
        message: object2json(progress)
      });
    });
  });
}
