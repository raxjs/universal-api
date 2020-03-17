import {
  InnerRequestOptions,
  ResponseData,
  ERROR_REQUEST_TIMEOUT,
  ERROR_REQUEST_ABORT
} from '../types';
import {
  applyParamToURL,
  object2json,
  checkIsApplyDataToURL,
  isObject,
  isPlainObject
} from '../utils';

export default function requestXHR(options: InnerRequestOptions): Promise<ResponseData> {
  options.headers = Object.assign({
    'Accept': 'application/json, text/plain, */*'
  }, options.headers);
  const {
    validateStatus,
    url,
    method,
    withCredentials,
    headers,
    data,
    timeout,
    dataType,
  } = Object.assign(
    {
      withCredentials: true,
      method: 'GET',
      validateStatus: (status: number) => {
        return status >= 200 && status < 300 || status === 304;
      }
    }, options);

  return new Promise((resolve, reject) => {
    let timer: number;
    let requestData: any;
    const xhr = new XMLHttpRequest();
    const clean = () => {
      clearTimeout(timer);
    };

    timer = window.setTimeout(
      () => {
        clean();
        reject(ERROR_REQUEST_TIMEOUT);
        xhr.abort();
      },
      timeout,
    );
    xhr.onreadystatechange = () => {
      if (!xhr || xhr.readyState !== 4) {
        return;
      }
      clean();
      if (!validateStatus(xhr.status)) {
        // TODO Detailed error message
        return reject({
          code: ERROR_REQUEST_ABORT.code,
          message: `${JSON.stringify({
            status: xhr.status
          })}`
        });
      }
      const headers = xhr.getAllResponseHeaders();
      const arr = headers.trim().split(/[\r\n]+/);
      const headerMap = {};
      arr.forEach(function(line) {
        var parts = line.split(': ');
        var header = parts.shift();
        var value = parts.join(': ');
        headerMap[header as string] = value;
      });
      resolve({
        data: xhr.response,
        status: xhr.status,
        headers: headerMap,
      });
    };
    xhr.responseType = dataType || '';
    if (method === 'GET' || checkIsApplyDataToURL(headers)) {
      xhr.open(method, applyParamToURL(data, url), true);
    } else {
      xhr.open(method, url, true );
    }
    xhr.withCredentials = withCredentials;
    if (headers) {
      Object.keys(headers || []).forEach((key) => {
        xhr.setRequestHeader(key, String(headers[key]));
      });
    }
    if (method === 'GET') {
      requestData = null;
    } else {
      requestData = data;
    }

    if (isObject(requestData) && isPlainObject(requestData)) {
      requestData = object2json(requestData);
    }

    xhr.send(requestData);
  });
}
