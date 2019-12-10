import { isWeb, isWeex, isMiniApp, isWeChatMiniProgram } from 'universal-env';
import webModule from './web';
import weexModule from './weex';
import miniappModule from './miniapp/ali';
import wechatModule from './miniapp/wechat';

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

const deviceInfo = dutyChain(
  handleWeb,
  handleWeex,
  handleMiniApp,
  handleWeChat
);

const appName = deviceInfo.appName;
const appVersion = deviceInfo.appVersion;
const platform = deviceInfo.platform;
const screenWidth = deviceInfo.screenWidth;
const screenHeight = deviceInfo.screenHeight;

export {
  appName,
  appVersion,
  platform,
  screenWidth,
  screenHeight,
};
