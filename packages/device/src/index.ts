import { isWeb, isWeex, isMiniApp, isWeChatMiniProgram, isByteDanceMicroApp } from 'universal-env';
import webModule from './web';
import weexModule from './weex';
import miniappModule from './ali-miniapp';
import wechatModule from './wechat-miniprogram';
import byteDanceModule from './bytedance-microapp';

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
    return miniappModule;
  }
  return null;
}

function handleWeChat() {
  if (isWeChatMiniProgram) {
    return wechatModule;
  }
  return null;
}

function handleByteDance() {
  if (isByteDanceMicroApp) {
    return byteDanceModule;
  }
  return null;
}

function handleDefault() {
  return {};
}

const deviceInfo = dutyChain(
  handleWeb,
  handleWeex,
  handleMiniApp,
  handleWeChat,
  handleByteDance,
  handleDefault
);

const appName = deviceInfo.appName;
const appVersion = deviceInfo.appVersion;
const platform = deviceInfo.platform;
const screenWidth = deviceInfo.screenWidth;
const screenHeight = deviceInfo.screenHeight;
const devicePixelRatio = deviceInfo.devicePixelRatio;

export {
  appName,
  appVersion,
  platform,
  screenWidth,
  screenHeight,
  devicePixelRatio
};
