/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
/* eslint-disable no-empty */

import { DATA_TYPE, AsObject, RequestOptions } from './types';
import { styleIn } from '@utils/styleOptions';
import { CONTAINER_NAME } from '@utils/constant';

export function getDataWithType(data: any, type: DATA_TYPE) {
  if (type === DATA_TYPE.json) {
    try {
      return JSON.parse(data);
    } catch (e) { }
  }

  if (type === DATA_TYPE.text) {
    try {
      return JSON.stringify(data);
    } catch (e) { }
  }

  return data;
}

export function stringifyQS(qs: AsObject): string {
  if (!qs) {
    return '';
  }
  const str: string[] = [];
  for (const key in qs) {
    if (qs[key]) {
      str.push(`${key}=${encodeURIComponent(String(qs[key]))}`);
    }
  }
  return str.join('&');
}

export function applyParamToURL(param: AsObject | void, url: string): string {
  if (!param) {
    return url;
  }
  return `${url}${url.indexOf('?') === -1 ? '?' : '&'}${stringifyQS(param)}`;
}

export function object2json(obj: any) {
  try {
    return JSON.stringify(obj);
  } catch (e) {
    return obj || '';
  }
}

export function isObject(obj: any) {
  return typeof obj === 'object' && obj !== null;
}

export function normalizeHeaders(obj: AsObject) {
  if (!isObject(obj)) {
    return obj;
  }
  const keyList = ['Accept', 'Content-Type'];

  keyList.forEach((key) => {
    for (const headerKey in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, headerKey)) {
        if (headerKey.toUpperCase() === key.toUpperCase()
        && headerKey !== key
        ) {
          obj[key] = obj[headerKey];
          delete obj[headerKey];
          return true;
        }
        return false;
      }
    }
  });
  return obj;
}

export function checkIsApplyDataToURL(headers: AsObject | undefined) {
  if (!headers || !headers['Content-Type']) {
    return false;
  }
  return String(headers['Content-Type']).toLowerCase().indexOf('application/x-www-form-urlencoded') > -1;
}

const EMPTY_OBJECT = {};

export function isPlainObject(obj) {
  return EMPTY_OBJECT.toString.call(obj) === '[object Object]';
}
export function styleOptions(options, containerName) {
  const DEFAULT_TIMEOUT = 20000;
  enum DATA_TYPE {
    json = 'json',
    text = 'text'
  }
  const DEFAULT_REQUEST_OPTIONS: RequestOptions = {
    url: '',
    headers: { 'Content-Type': 'application/json' },
    method: 'GET',
    jsonpCallbackProp: 'callback',
    jsonpCallback: '__uni_jsonp_handler',
    timeout: DEFAULT_TIMEOUT,
    dataType: DATA_TYPE.json,
  };
  const isJsonp = options?.method?.toUpperCase() === 'JSONP';
  const jsonpCallback = options.jsonpCallback || DEFAULT_REQUEST_OPTIONS.jsonpCallback;
  const afterOptions: RequestOptions = Object.assign({},
    DEFAULT_REQUEST_OPTIONS,
    options,
    {
      method: isJsonp ? 'GET' : (options.method || 'GET').toUpperCase(),
      isJsonp,
      dataType: isJsonp ? 'text' : options.dataType,
      data: isJsonp ?
        { ...options.data,
          [options.jsonpCallbackProp || DEFAULT_REQUEST_OPTIONS.jsonpCallbackProp]:
          jsonpCallback } : options.data,
      headers: normalizeHeaders(options.headers || {}),
      success: (res) => {
        if (isJsonp && containerName !== CONTAINER_NAME.WEB) {
          if (res.data.indexOf(jsonpCallback) === -1) {
            options.fail && options.fail({
              error: 14,
              data: res,
              errorMessage: 'JSONP 解码失败',
            });
            return;
          }
          console.log(res.data.replace(`${jsonpCallback}(`, '').replace(')', ''));
          options.success && options.success({
            ...res,
            headers: res.header || res.headers || {},
            data: JSON.parse(res.data.replace(`${jsonpCallback}(`, '').replace(')', '')),
            status: res.statusCode || res.status,
          });
          return;
        }
        options.success && options.success({
          ...res,
          headers: res.header || res.headers || {},
          status: res.statusCode || res.status,
        });
      },
      complete: (res) => {
        if (isJsonp && res.data && containerName !== CONTAINER_NAME.WEB) {
          if (res.data.indexOf(jsonpCallback) === -1) {
            options.fail && options.fail({
              error: 14,
              data: res,
              errorMessage: 'JSONP 解码失败',
            });
            return;
          }
          options.complete && options.complete({
            ...res,
            data: JSON.parse(res.data.replace(`${jsonpCallback}(`, '').replace(')', '')),
            status: res.statusCode || res.status,
            headers: res.header || res.headers || {},
          });
          return;
        }
        options.complete && options.complete(res.data ? {
          ...res,
          status: res.statusCode || res.status,
          headers: res.header || res.headers || {},
        } : res);
      },
    });
  return afterOptions;
}
export function normalize(api, containerName) {
  return (options) => {
    const afterOptions = styleOptions(styleIn(options, containerName), containerName);

    return api(afterOptions);
  };
}
