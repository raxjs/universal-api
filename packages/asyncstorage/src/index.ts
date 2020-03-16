import { isWeb, isWeex, isMiniApp, isWeChatMiniprogram, isQuickApp } from 'universal-env';
import webModule from './web/index';
import weexModule from './weex/index';
import miniAppModule from './miniapp/ali/index';
import weChatModule from './miniapp/wechat/index';
import quickAppModule from './quickapp/index';
import { AsyncStorage } from './types';

let AsyncStorage: AsyncStorage;

if (isWeb) {
  AsyncStorage = webModule;
}

if (isWeex) {
  AsyncStorage = weexModule;
}

if (isMiniApp) {
  AsyncStorage = miniAppModule;
}

if (isWeChatMiniprogram) {
  AsyncStorage = weChatModule;
}

if (isQuickApp) {
  AsyncStorage = quickAppModule;
}

export default AsyncStorage;
