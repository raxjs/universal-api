import { isWeb, isWeex, isMiniApp, isWeChatMiniProgram, isQuickApp } from 'universal-env';
import webModule from './web/index';
import weexModule from './weex/index';
import miniAppModule from './miniapp/ali/index';
import weChatModule from './miniapp/wechat/index';
import quickAppModule from './quickapp/index'
import { INavigate } from './types';

function dutyChain(...fns) {
  for (let i = 0; i < fns.length; i++) {
    const result = fns[i]();
    if (result) {
      return result;
    }
  }
}

function handleWeb() {
  if (isWeb) {
    return webModule;
  }
  return null;
}

function handleWeex() {
  if (isWeex) {
    return weexModule;
  }
  return null;
}

function handleMiniApp() {
  if (isMiniApp) {
    return miniAppModule;
  }
  return null;
}

function handleQuickApp() {
  if (isQuickApp) {
    return quickAppModule;
  }
  return null;
}

function handleWeChat() {
  if (isWeChatMiniProgram) {
    return weChatModule;
  }
  return null;
}

// Default module is web
function handleDefault() {
  return webModule;
}

const Navigate: INavigate = dutyChain(
  handleQuickApp,
  handleWeb,
  handleWeex,
  handleMiniApp,
  handleWeChat,
  handleDefault
);

// Web should be first
export default Navigate;
