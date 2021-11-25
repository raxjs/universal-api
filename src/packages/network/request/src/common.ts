/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
/* eslint-disable no-empty */

import { DATA_TYPE, AsObject, RequestOptions } from './types';
import { styleIn } from '@utils/styleOptions';
import { CONTAINER_NAME, JSONP_SIGN } from '@utils/constant';

export function getDataWithType(data: any, type: DATA_TYPE) {
  if (type === 'json') {
    try {
      return JSON.parse(data);
    } catch (e) { }
  }

  if (type === 'text') {
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
        if (headerKey.toLowerCase() === key.toLowerCase()
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
export const validateStatus = (status: number | string) => {
  return (status >= 200 && status < 300) || status === 304;
};
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

  const DEFAULT_REQUEST_OPTIONS: RequestOptions = {
    url: '',
    headers: { 'Content-Type': 'application/json' },
    method: 'GET',
    jsonpCallbackProp: 'callback',
    jsonpCallback: `__uni_jsonp_handler_${ new Date().getTime()}`,
    timeout: DEFAULT_TIMEOUT,
    dataType: 'json',
  };
  const isJsonp = options?.method?.toUpperCase() === 'JSONP';
  if (isJsonp && containerName === CONTAINER_NAME.WEB) {
    window[JSONP_SIGN] = typeof (window[JSONP_SIGN]) !== 'undefined' ? (window[JSONP_SIGN] + 1) : 0;
    DEFAULT_REQUEST_OPTIONS.jsonpCallback = `${DEFAULT_REQUEST_OPTIONS.jsonpCallback}_${window[JSONP_SIGN]}`;
  }

  const jsonpCallback = options.jsonpCallback || DEFAULT_REQUEST_OPTIONS.jsonpCallback;
  const adapterResponse = (res) => {
    if ((res.errMsg && res?.errMsg?.indexOf('request:fail') !== -1) || res.error) {
      return {
        ...res,
        error: res.error || res.status || res.statusCode,
        errorMessage: res.errorMessage || res.errMsg || '',
        status: res.statusCode || res.status,
        headers: res.header || res.headers || {},
      };
    }
    const afterRes = {
      ...res,
      errorMessage: res.errorMessage || res.errMsg || '',
      status: res.statusCode || res.status,
      headers: res.header || res.headers || {},
    };
    if (isJsonp && containerName !== CONTAINER_NAME.WEB) {
      try {
        const content = res?.data?.replace(`${jsonpCallback}(`, '').replace(')', '');
        const data = content ? JSON.parse(content) : '';
        return {
          ...afterRes,
          data,
        };
      } catch (e) {
        return {
          error: 14,
          data: res,
          errorMessage: 'JSONP 解码失败',
        };
      }
    }
    return afterRes;
  };
  let afterOptions = { ...DEFAULT_REQUEST_OPTIONS,
    ...options,
    method: (options.method || 'GET').toUpperCase(),
    headers: { ...DEFAULT_REQUEST_OPTIONS.headers, ...normalizeHeaders(options.headers || {}) },
    success: (res) => {
      const _validateStatus = options.validateStatus || validateStatus;
      const _res = adapterResponse(res);
      if (!_validateStatus(_res.status)) {
        options.fail && options.fail(_res);
      } else {
        options.success && options.success(_res);
      }
    },
    fail: (res) => {
      options.fail && options.fail(adapterResponse(res));
    },
    complete: (res) => {
      options.complete && options.complete(adapterResponse(res));
    },
  };

  if (isJsonp) {
    afterOptions = {
      ...afterOptions,
      method: 'GET',
      isJsonp,
      dataType: 'text',
      data:
        { ...options.data,
          [options.jsonpCallbackProp || DEFAULT_REQUEST_OPTIONS.jsonpCallbackProp]:
          jsonpCallback },
    };
  }

  return afterOptions;
}
export function normalize(api, containerName) {
  return (options) => {
    const afterOptions = styleOptions(styleIn(options, containerName), containerName);

    return api(afterOptions);
  };
}
