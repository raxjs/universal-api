/* eslint-disable no-mixed-operators */
/* eslint-disable @typescript-eslint/no-shadow */
import {
  RequestOptions,
  ERROR_REQUEST_TIMEOUT,
  ERROR_REQUEST_ABORT,
} from '../types';
import {
  applyParamToURL,
  object2json,
  checkIsApplyDataToURL,
  isObject,
  isPlainObject,
  normalize,
} from '../common';
import { CONTAINER_NAME } from '@utils/constant';

function requestXHR(options: RequestOptions) {
  options.headers = Object.assign({
    Accept: 'application/json, text/plain, */*',
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
    success, fail, complete,
  } = Object.assign(
    {
      withCredentials: true,
      method: 'GET',
      validateStatus: (status: number) => {
        return status >= 200 && status < 300 || status === 304;
      },
    }, options,
  );

  let timer: number;
  let requestData: any;
  const xhr = new XMLHttpRequest();
  const clean = () => {
    clearTimeout(timer);
  };

  timer = window.setTimeout(
    () => {
      clean();
      fail && fail(ERROR_REQUEST_TIMEOUT);
      complete && complete(ERROR_REQUEST_TIMEOUT);
      // reject(ERROR_REQUEST_TIMEOUT);
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
      fail && fail({
        code: ERROR_REQUEST_ABORT.code,
        message: `${JSON.stringify({
          status: xhr.status,
        })}`,
      });
      complete && complete({
        code: ERROR_REQUEST_ABORT.code,
        message: `${JSON.stringify({
          status: xhr.status,
        })}`,
      });
      // return reject({
      //   code: ERROR_REQUEST_ABORT.code,
      //   message: `${JSON.stringify({
      //     status: xhr.status
      //   })}`
      // });
    }
    const headers = xhr.getAllResponseHeaders();
    const arr = headers.trim().split(/[\r\n]+/);
    const headerMap = {};
    arr.forEach((line) => {
      const parts = line.split(': ');
      const header = parts.shift();
      const value = parts.join(': ');
      headerMap[header as string] = value;
    });
    success && success({
      data: xhr.response,
      status: xhr.status,
      headers: headerMap,
    });
    complete && complete({
      data: xhr.response,
      status: xhr.status,
      headers: headerMap,
    });
    // resolve({
    //   data: xhr.response,
    //   status: xhr.status,
    //   headers: headerMap,
    // });
  };
  xhr.responseType = dataType || '';
  if (method === 'GET' || checkIsApplyDataToURL(headers)) {
    xhr.open(method, applyParamToURL(data, url), true);
  } else {
    xhr.open(method, url, true);
  }
  xhr.withCredentials = withCredentials;
  if (headers) {
    for (const key in headers || []) {
      if (Object.prototype.hasOwnProperty.call(headers, key)) {
        xhr.setRequestHeader(key, String(headers[key]));
      }
    }
    // Object.keys(headers || []).forEach((key) => {
    //   xhr.setRequestHeader(key, String(headers[key]));
    // });
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
  return {
    abort: () => {},
  };
  // });
}
export default normalize(requestXHR, CONTAINER_NAME.WEB);
