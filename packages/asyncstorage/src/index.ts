import { isWeb, isWeex, isMiniApp, isWeChatMiniprogram } from 'universal-env';
import webModule from './web';
import weexModule from './weex';
import miniAppModule from './miniapp/ali';
import weChatModule from './miniapp/wechat';
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

export default AsyncStorage;
