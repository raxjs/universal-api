/* eslint-disable no-mixed-operators */
/* eslint-disable @typescript-eslint/no-shadow */
import {
  ERROR_REQUEST_TIMEOUT,
  ERROR_REQUEST_ABORT,
  WebRequestOptions,
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

function requestXHR(options) {
  options.headers = {
    Accept: 'application/json, text/plain, */*',
    ...options.headers,
  };
  const {
    validateStatus,
    url,
    method,
    isJsonp,
    withCredentials,
    headers,
    data,
    timeout,
    jsonpCallback,
    dataType,
    success, fail, complete,
  }: WebRequestOptions = {
    jsonpCallbackProp: 'callback',
    jsonpCallback: '__uni_jsonp_handler',
    withCredentials: true,
    method: 'GET',
    validateStatus: (status: number) => {
      return status >= 200 && status < 300 || status === 304;
    },
    ...options,
  };
  if (isJsonp) {
    try {
      (window[jsonpCallback] as any) = (data) => {
        success && success({
          data,
          status: 200,
          headers: {},
        });
        complete && complete({
          data,
          status: 200,
          headers: {},
        });
      };
      const scriptUrl = `${applyParamToURL(data, url)}`;
      const script = document.createElement('script');
      script.setAttribute('src', scriptUrl);
      document.getElementsByTagName('head')[0].appendChild(script);
    } catch (e) {
      fail && fail(ERROR_REQUEST_TIMEOUT);
      complete && complete(ERROR_REQUEST_TIMEOUT);
    }
    return {
      abort: () => {},
    };
  }
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
      return;
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
}
export default normalize(requestXHR, CONTAINER_NAME.WEB);
