import { isMiniApp, isDingdingMiniapp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp } from 'universal-env';
import {
  RequestOptions
} from './types';
import { normalizeHeaders } from './utils';
import webModule from './web/index';
import ddModule from './miniapp-dingding/index';
import miniAppModule from './miniapp/index';
import weChatModule from './wechat-miniprogram/index';
import bytedanceModule from './miniapp-bytedance/index';
import { promisify } from '../../../utils/promisify';

const DEFAULT_TIMEOUT = 20000;
enum DATA_TYPE {
  json = 'json',
  text = 'text'
}
const DEFAULT_REQUEST_OPTIONS: RequestOptions = {
  url: '',
  headers: { 'Content-Type': 'application/json' },
  method: 'GET',
  timeout: DEFAULT_TIMEOUT,
  dataType: DATA_TYPE.json
};

export default (options) => {
  let afterOptions: RequestOptions = Object.assign({},
    DEFAULT_REQUEST_OPTIONS,
    options,
    {
      method: (options.method || 'GET').toUpperCase(),
      headers: normalizeHeaders(options.headers || {})
    });

  // options.headers = normalizeHeaders(options.headers || {});
  if (isDingdingMiniapp) {
    return promisify(ddModule)(afterOptions);
  } else if (isWeChatMiniProgram) {
    return promisify(weChatModule)(afterOptions);
  } else if (isByteDanceMicroApp) {
    return promisify(bytedanceModule)(afterOptions);
  } else if (isMiniApp) {
    return promisify(miniAppModule)(afterOptions);
  } else if (isWeb) {
    return promisify(webModule)(afterOptions);
  }
};

