/**
 *  Common
 */
export enum DATA_TYPE {
  json = 'json',
  text = 'text'
}
export const DEFAULT_TIMEOUT = 20000;
export const DEFAULT_JSON_CALLBACK = 'callback';
export const DEFAULT_JSONP_OPTIONS = {
  timeout: DEFAULT_TIMEOUT,
  jsonpCallback: DEFAULT_JSON_CALLBACK,
  dataType: DATA_TYPE.json
};
export interface AsObject { [key: string]: string | number }

/**
 * Request
 */

export interface JsonpOptions {
  url: string;
  timeout?: number;
  dataType?: DATA_TYPE;
  jsonpCallback?: string;
  jsonpCallbackFunctionName?: string;
}

export interface RequestOptions {
  url: string;
  headers?: AsObject;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD';
  data?: AsObject;
  timeout?: number;
  dataType?: DATA_TYPE;
}

export interface InnerRequestOptions extends RequestOptions {
  headers: AsObject;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD';
  data: AsObject;
  timeout: number;
  dataType: DATA_TYPE;
}

export const DEFAULT_REQUEST_OPTIONS: RequestOptions = {
  url: '',
  headers: { 'Content-Type': 'application/json' },
  method: 'GET',
  timeout: DEFAULT_TIMEOUT,
  dataType: DATA_TYPE.json
};

/**
 * Response
 */

export interface ResponseData {
  // dataType中声明的数据，若转换失败则原样返回
  data: string | object;
  // 请求的返回头部（若有）
  headers?: AsObject;
  // 返回的状态码 (若有)
  status?: number;
}

export interface ResponseError extends ErrorData {
  code: number; // 见下面的 ERROR_REQUEST_XXX
  message: string; // 错误原因
}

/**
 * Error
 */

export interface ErrorData {
  code: number;
  message?: string;
}

export const ERROR_REQUEST_ABORT: ErrorData = {
  code: 0,
  message: 'Request Abort'
};

export const ERROR_REQUEST_TIMEOUT: ErrorData = {
  code: 1,
  message: 'Request timeout'
};

export const ERROR_REQUEST_NOT_SUPPORT: ErrorData = {
  code: 2,
  message: 'Request not support this platform'
};