import { isWeb, isWeex, isMiniApp, isWeChatMiniProgram, isQuickApp } from 'universal-env';
import webModule from './web/index';
import weexModule from './weex/index';
import miniAppModule from './miniapp/ali/index';
import weChatModule from './miniapp/wechat/index';
import { AsyncStorage } from './types';

let AsyncStorage: AsyncStorage;
if (isQuickApp) {
  const quickModule = require('./quickapp/index');
  AsyncStorage = quickModule;
}

if (isWeb) {
  AsyncStorage = webModule;
}

if (isWeex) {
  AsyncStorage = weexModule;
}

if (isMiniApp) {
  AsyncStorage = miniAppModule;
}

if (isWeChatMiniProgram) {
  AsyncStorage = weChatModule;
}

export default AsyncStorage;
