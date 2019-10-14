import { isWeex, isMiniApp, isWeChatMiniprogram, isWeb } from 'universal-env';
import {
  RequestOptions,
  DEFAULT_REQUEST_OPTIONS
} from './types';
import { normalizeHeaders } from './utils';

function dutyChain(...fns) {
  for (let i = 0; i < fns.length; i++) {
    const result = fns[i]();
    if (result) {
      return result;
    }
  }
}

function handleWeb(afterOptions) {
  if (isWeb) {
    const request = require('./web/').default;
    return request(afterOptions);
  }
  return false;
}

function handleMiniApp(afterOptions) {
  if (isMiniApp) {
    const request = require('./miniapp/').default;
    return request(afterOptions);
  }
  return false;
}

function handleWeex(afterOptions) {
  if (isWeex) {
    const request = require('./weex/').default;
    return request(afterOptions);
  }
  return false;
}

function handleWeChatMiniprogram(afterOptions) {
  if (isWeChatMiniprogram) {
    const request = require('./weapp/').default;
    return request(afterOptions);
  }
  return false;
}

export default function(options: RequestOptions) {
  let afterOptions: RequestOptions = Object.assign({},
    DEFAULT_REQUEST_OPTIONS,
    options,
    {
      method: (options.method || 'GET').toUpperCase(),
    });

  options.headers = normalizeHeaders(options.headers || {});
  return dutyChain(
    handleWeex.bind(null, afterOptions),
    handleWeb.bind(null, afterOptions),
    handleMiniApp.bind(null, afterOptions),
    handleWeChatMiniprogram.bind(null, afterOptions));
}