import { isWeex, isMiniApp, isWeChatMiniProgram, isWeb, isByteDanceMicroApp } from 'universal-env';
import {
  RequestOptions,
  DEFAULT_REQUEST_OPTIONS
} from './types';
import { normalizeHeaders } from './utils';
import webModule from './web/index';
import weexModule from './weex/index';
import miniAppModule from './miniapp/index';
import weChatModule from './wechat-miniprogram/index';
import bytedanceModule from './miniapp-bytedance/index';

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
    const request = webModule;
    return request(afterOptions);
  }
  return null;
}

function handleMiniApp(afterOptions) {
  if (isMiniApp) {
    const request = miniAppModule;
    return request(afterOptions);
  }
  return null;
}

function handleWeex(afterOptions) {
  if (isWeex) {
    const request = weexModule;
    return request(afterOptions);
  }
  return null;
}

function handleWeChatMiniprogram(afterOptions) {
  if (isWeChatMiniProgram) {
    const request = weChatModule;
    return request(afterOptions);
  }
  return null;
}

function handleBytedanceMiniprogram(afterOptions) {
  if (isByteDanceMicroApp) {
    const request = bytedanceModule;
    return request(afterOptions);
  }
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
    handleBytedanceMiniprogram.bind(null, afterOptions),
    handleWeChatMiniprogram.bind(null, afterOptions));
}
