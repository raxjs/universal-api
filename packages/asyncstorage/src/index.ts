import { isWeb, isWeex, isMiniApp, isWeChatMiniProgram, isQuickApp } from 'universal-env';
import webModule from './web/index';
import weexModule from './weex/index';
import miniAppModule from './miniapp/ali/index';
import weChatModule from './miniapp/wechat/index';
import quickModule from './quickapp/index';
import { AsyncStorage } from './types';

let AsyncStorage: AsyncStorage;
if (isQuickApp) {
  AsyncStorage = quickModule;
} else if (isWeb) {
  AsyncStorage = webModule;
} else if (isWeex) {
  AsyncStorage = weexModule;
} else if (isMiniApp) {
  AsyncStorage = miniAppModule;
} else if (isWeChatMiniProgram) {
  AsyncStorage = weChatModule;
}

export default AsyncStorage;
